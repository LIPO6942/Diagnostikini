/**
 * @fileoverview Wellness page component displaying various health tips.
 */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { wellnessTips } from "@/constants/wellness";
import Image from 'next/image';

export default function WellnessPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Module Bien-être</h1>
        <p className="text-muted-foreground">Conseils personnalisés pour un mode de vie plus sain.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {wellnessTips.map((item) => (
          <Card key={item.category} className="overflow-hidden">
            <div className="relative h-48 w-full">
               <Image src={item.image.src} alt={item.category} layout="fill" objectFit="cover" data-ai-hint={item.image.hint} />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <item.icon className="h-6 w-6 text-primary" />
                {item.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                {item.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
