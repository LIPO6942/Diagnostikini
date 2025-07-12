"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SidebarNav } from "@/components/layout/sidebar-nav";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
        <SidebarNav />
        <SidebarInset className="p-4 sm:p-6 lg:p-8 bg-background">
            {children}
        </SidebarInset>
    </SidebarProvider>
  );
}
