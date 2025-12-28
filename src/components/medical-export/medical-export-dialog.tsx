"use client";

import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    QrCode,
    FileDown,
    Share2,
    CheckCircle2,
    Info,
    Calendar,
    User,
    Activity,
    AlertTriangle
} from "lucide-react";
import { useProfile } from "@/contexts/profile-context";
import { getHealthRecords } from "@/services/health-record-service";
import { QRCodeSVG } from "qrcode.react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function MedicalExportDialog() {
    const { profile } = useProfile();
    const { toast } = useToast();
    const [isGenerating, setIsGenerating] = useState(false);

    // Get records for export
    const records = getHealthRecords();

    const generateStructuredText = () => {
        if (!profile) return "Aucun profil disponible.";

        let text = "=== DOSSIER MÉDICAL (DIAGNOSTIKINI) ===\n\n";
        text += `PATIENT: ${profile.sex === 'homme' ? 'M.' : 'Mme'} (Age: ${profile.age || 'N/A'})\n`;
        text += `GROUPE SANGUIN: ${profile.bloodGroup}\n`;
        if (profile.weight) text += `POIDS: ${profile.weight} kg\n`;
        text += "\n";

        if (profile.allergies?.items?.length || profile.allergies?.other) {
            text += "--- ALLERGIES ---\n";
            profile.allergies.items?.forEach((a: string) => text += `- ${a}\n`);
            if (profile.allergies.other) text += `- Autre: ${profile.allergies.other}\n`;
            text += "\n";
        }

        if (profile.medicalHistory?.conditions?.length || profile.medicalHistory?.other) {
            text += "--- ANTÉCÉDENTS ---\n";
            profile.medicalHistory.conditions?.forEach((c: string) => text += `- ${c}\n`);
            if (profile.medicalHistory.other) text += `- Autre: ${profile.medicalHistory.other}\n`;
            text += "\n";
        }

        if (profile.currentTreatments?.medications?.length || profile.currentTreatments?.other) {
            text += "--- TRAITEMENTS EN COURS ---\n";
            profile.currentTreatments.medications?.forEach((m: string) => text += `- ${m}\n`);
            if (profile.currentTreatments.other) text += `- Autre: ${profile.currentTreatments.other}\n`;
            text += "\n";
        }

        if (profile.familyHistory?.length) {
            text += "--- ANTÉCÉDENTS FAMILIAUX ---\n";
            profile.familyHistory.forEach((f: any) => {
                text += `- ${f.disease}: ${f.relatives.join(", ")}\n`;
            });
            text += "\n";
        }

        if (records.length > 0) {
            text += "--- HISTORIQUE RÉCENT ---\n";
            records.slice(0, 5).forEach((r: any) => {
                text += `[${format(new Date(r.date), "dd/MM/yyyy")}] ${r.title}\n`;
                if (r.diagnosis) text += `  Diag: ${r.diagnosis}\n`;
                if (r.doctorName) text += `  Médecin: ${r.doctorName}\n`;
            });
        }

        return text;
    };

    const exportPDF = async () => {
        setIsGenerating(true);
        try {
            const doc = new jsPDF();
            const pageWidth = doc.internal.pageSize.getWidth();

            // Function to load image
            const loadImage = (url: string): Promise<HTMLImageElement> => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.crossOrigin = 'Anonymous';
                    img.src = url;
                    img.onload = () => resolve(img);
                    img.onerror = (e) => reject(e);
                });
            };

            // Header Background: Draw green starting AFTER the logo area (first 40mm)
            doc.setFillColor(17, 94, 89); // Emerald-900 (Primary)
            doc.rect(40, 0, pageWidth - 40, 40, 'F');

            // Try to load and add logo in the white area (0 to 40mm)
            try {
                // Using relative path for the image
                const logoImg = await loadImage("/icons/icon-192x192.png");
                // Place logo in the white space on the left
                doc.addImage(logoImg, 'PNG', 8, 8, 24, 24);
            } catch (e) {
                console.error("Could not load logo for PDF", e);
                // Fallback: fill the entire header if logo fails
                doc.rect(0, 0, 40, 40, 'F');
            }

            doc.setTextColor(255, 255, 255);
            doc.setFontSize(22);
            doc.setFont("helvetica", "bold");
            // Text stays in the green area starting at x=50
            doc.text("DIAGNOSTIKINI", 50, 20);

            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text("Exportation du Dossier Médical Personnel", 50, 28);
            doc.text(`Généré le: ${format(new Date(), "PPpp", { locale: fr })}`, 50, 34);

            // Profile Section
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(16);
            doc.setFont("helvetica", "bold");
            doc.text("1. Informations Personnelles", 15, 55);

            doc.setFontSize(11);
            doc.setFont("helvetica", "normal");
            const profileData = [
                ["Sexe", profile?.sex === 'homme' ? 'Homme' : 'Femme'],
                ["Âge", profile?.age ? `${profile.age} ans` : 'N/A'],
                ["Groupe Sanguin", profile?.bloodGroup || 'N/A'],
                ["Poids", profile?.weight ? `${profile.weight} kg` : 'N/A']
            ];

            (doc as any).autoTable({
                startY: 60,
                head: [['Champ', 'Valeur']],
                body: profileData,
                theme: 'striped',
                headStyles: { fillColor: [17, 94, 89] }
            });

            // Medical Info Section
            let currentY = (doc as any).lastAutoTable.finalY + 15;
            doc.setFontSize(16);
            doc.setFont("helvetica", "bold");
            doc.text("2. Antécédents & Alertes", 15, currentY);

            const alertData = [
                ["Allergies", profile?.allergies?.items?.join(", ") || profile?.allergies?.other || "Aucune"],
                ["Antécédents", profile?.medicalHistory?.conditions?.join(", ") || profile?.medicalHistory?.other || "Aucun"],
                ["Traitements", profile?.currentTreatments?.medications?.join(", ") || profile?.currentTreatments?.other || "Aucun"]
            ];

            (doc as any).autoTable({
                startY: currentY + 5,
                body: alertData,
                theme: 'plain',
                styles: { cellPadding: 5 },
                columnStyles: { 0: { fontStyle: 'bold', width: 40 } }
            });

            // Family History Section
            currentY = (doc as any).lastAutoTable.finalY + 15;
            if (profile?.familyHistory?.length) {
                doc.setFontSize(16);
                doc.setFont("helvetica", "bold");
                doc.text("3. Antécédents Familiaux", 15, currentY);

                const familyData = profile.familyHistory.map((f: any) => [
                    f.disease,
                    f.relatives.join(", ")
                ]);

                (doc as any).autoTable({
                    startY: currentY + 5,
                    head: [['Maladie', 'Membres concernés']],
                    body: familyData,
                    theme: 'striped',
                    headStyles: { fillColor: [17, 94, 89] }
                });
                currentY = (doc as any).lastAutoTable.finalY + 15;
            }

            // History Section
            if (records.length > 0) {
                doc.setFontSize(16);
                doc.setFont("helvetica", "bold");
                doc.text(`${profile?.familyHistory?.length ? '4' : '3'}. Historique des Consultations`, 15, currentY);

                const recordData = records.map(r => [
                    format(new Date(r.date), "dd/MM/yyyy"),
                    r.title,
                    r.category,
                    r.doctorName || "N/A"
                ]);

                (doc as any).autoTable({
                    startY: currentY + 5,
                    head: [['Date', 'Titre', 'Catégorie', 'Médecin']],
                    body: recordData,
                    theme: 'striped',
                    headStyles: { fillColor: [17, 94, 89] }
                });
            }

            // Footer
            const totalPages = doc.internal.pages.length - 1;
            for (let i = 1; i <= totalPages; i++) {
                doc.setPage(i);
                doc.setFontSize(8);
                doc.setTextColor(150);
                doc.text(`Document généré par l'application Diagnostikini - Page ${i} sur ${totalPages}`, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });
            }

            doc.save("Dossier_Medical_Diagnostikini.pdf");

            toast({
                title: "Export réussi",
                description: "Votre dossier médical a été téléchargé en PDF.",
            });
        } catch (error) {
            console.error("PDF Export Error:", error);
            toast({
                title: "Erreur",
                description: "Impossible de générer le PDF.",
                variant: "destructive"
            });
        } finally {
            setIsGenerating(false);
        }
    };

    const qrContent = generateStructuredText();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full shadow-md border-primary/20 hover:bg-primary/5 transition-all">
                    <QrCode className="h-5 w-5 text-primary" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-white">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-primary" />
                        Mon Dossier Médical
                    </DialogTitle>
                    <DialogDescription>
                        Exportez vos données ou présentez votre QR Code au médecin.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col items-center justify-center p-4 space-y-6">
                    {/* QR Code Section */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative p-6 bg-white border-2 border-primary/10 rounded-xl shadow-lg">
                            <QRCodeSVG
                                value={qrContent}
                                size={200}
                                level="H"
                                includeMargin={true}
                                imageSettings={{
                                    src: "/icons/icon-192x192.png",
                                    x: undefined,
                                    y: undefined,
                                    height: 36,
                                    width: 36,
                                    excavate: true,
                                }}
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                                <Info className="h-3 w-3" />
                                Scan rapide par le médecin
                            </span>
                        </div>
                    </div>

                    <div className="w-full space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                onClick={exportPDF}
                                disabled={isGenerating || !profile}
                                className="w-full flex items-center gap-2"
                            >
                                <FileDown className="h-4 w-4" />
                                Format PDF
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    navigator.share?.({
                                        title: 'Mon Dossier Médical Diagnostikini',
                                        text: qrContent,
                                    }).catch(() => {
                                        navigator.clipboard.writeText(qrContent);
                                        toast({ title: "Copié !", description: "Le résumé a été copié dans le presse-papier." });
                                    });
                                }}
                                className="w-full flex items-center gap-2"
                            >
                                <Share2 className="h-4 w-4" />
                                Partager
                            </Button>
                        </div>

                        <div className="p-3 bg-primary/5 border border-primary/10 rounded-lg">
                            <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-1.5">
                                <CheckCircle2 className="h-4 w-4" />
                                Données incluses :
                            </h4>
                            <ul className="text-xs text-muted-foreground space-y-1 ml-1">
                                <li className="flex items-center gap-2">
                                    <User className="h-3 w-3" /> Profil & Groupe Sanguin
                                </li>
                                <li className="flex items-center gap-2 text-destructive font-medium">
                                    <AlertTriangle className="h-3 w-3 text-destructive" /> Allergies & Antécédents
                                </li>
                                <li className="flex items-center gap-2 text-indigo-600 font-medium">
                                    <Activity className="h-3 w-3 text-indigo-600" /> Maladies Héréditaires
                                </li>
                                <li className="flex items-center gap-2">
                                    <Calendar className="h-3 w-3" /> Historique des consultations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
