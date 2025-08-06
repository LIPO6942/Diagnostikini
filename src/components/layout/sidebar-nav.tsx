"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookHeart,
  HeartPulse,
  Sparkles,
  User,
  Stethoscope,
  FileKey2,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"


export function SidebarNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Stethoscope className="size-6" />
          </div>
          <h1 className="font-headline text-xl font-bold">Diagnostikini</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="gap-6">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              isActive={isActive("/")}
              tooltip="Consultini IA"
            >
              <Link href="/">
                <Sparkles />
                <span>Consultini IA</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              isActive={isActive("/consultations")}
              tooltip="Consultations"
            >
              <Link href="/consultations">
                <BookHeart />
                <span>Consultations</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              isActive={isActive("/analyzed-documents")}
              tooltip="Documents Analysés"
            >
              <Link href="/analyzed-documents">
                <FileKey2 />
                <span>Doc Analysés</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              isActive={isActive("/wellness")}
              tooltip="Bien-être"
            >
              <Link href="/wellness">
                <HeartPulse />
                <span>Bien-être</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
       <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive("/profile")}
              tooltip="Profil"
            >
              <Link href="/profile">
                <User />
                <span>Profil</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
