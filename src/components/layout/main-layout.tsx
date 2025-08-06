/**
 * @fileoverview Main layout component, including sidebar and content area.
 */
"use client";

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { Button } from "../ui/button";
import Link from "next/link";
import { FileScan, MapPin, Siren } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <SidebarProvider>
          <SidebarNav />
          <SidebarInset className="bg-background">
            <TooltipProvider>
              <header className="sticky top-0 z-10 grid h-14 grid-cols-3 items-center border-b bg-background px-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="lg:hidden" />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Tooltip>
                      <TooltipTrigger asChild>
                        <Button asChild size="icon" className="sm:w-auto sm:px-4">
                          <Link href="/find-doctor">
                            <MapPin />
                            <span className="hidden sm:inline">Médecin</span>
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Trouver un médecin</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                      <TooltipTrigger asChild>
                        <Button asChild variant="destructive" size="icon" className="sm:w-auto sm:px-4">
                          <Link href="/emergency">
                            <Siren />
                            <span className="hidden sm:inline">Urgence</span>
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Mode Urgence</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                      <TooltipTrigger asChild>
                        <Button asChild variant="accent" size="icon" className="sm:w-auto sm:px-4">
                            <Link href="/analyze-document">
                              <>
                                <FileScan />
                                <span className="hidden sm:inline">Analyser</span>
                              </>
                            </Link>
                          </Button>
                      </TooltipTrigger>
                      <TooltipContent>Analyser un document</TooltipContent>
                  </Tooltip>
                </div>
                {/* Empty div for spacing */}
                <div />
              </header>
            </TooltipProvider>
            <main className="flex flex-1 flex-col items-center p-4 sm:p-6 lg:p-8">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </main>
          </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
