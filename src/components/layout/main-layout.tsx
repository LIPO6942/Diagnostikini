/**
 * @fileoverview Main layout component, including sidebar and content area.
 */
"use client";

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { Button } from "../ui/button";
import Link from "next/link";
import { MapPin, Siren } from "lucide-react";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <SidebarProvider>
          <SidebarNav />
          <SidebarInset className="bg-background">
            <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
              <div className="flex items-center gap-2">
                 <SidebarTrigger className="lg:hidden" />
                 <Button asChild variant="outline">
                  <Link href="/find-doctor">
                    <MapPin className="mr-2" />
                    Médecin
                  </Link>
                </Button>
                 <Button asChild variant="destructive">
                  <Link href="/emergency">
                    <Siren className="mr-2" />
                    Urgence
                  </Link>
                </Button>
              </div>
            </header>
            <main className="p-4 sm:p-6 lg:p-8">
              {children}
            </main>
          </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
