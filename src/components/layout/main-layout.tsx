/**
 * @fileoverview Main layout component, including sidebar and content area.
 */
"use client";

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { Button } from "../ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
        <SidebarNav />
        <SidebarInset className="bg-background">
          <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
            <SidebarTrigger className="lg:hidden" />
            <div className="flex-1"></div>
            <Button asChild variant="outline">
              <Link href="/find-doctor">
                <MapPin className="mr-2" />
                Trouver un médecin
              </Link>
            </Button>
          </header>
          <main className="p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </SidebarInset>
    </SidebarProvider>
  );
}
