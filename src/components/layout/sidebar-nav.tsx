"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookHeart,
  HeartPulse,
  Siren,
  Sparkles,
  User,
  Stethoscope,
  RotateCcw,
  MapPin,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"

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
        <SidebarMenu className="gap-4">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              isActive={isActive("/")}
              tooltip="Assistant IA"
            >
              <Link href="/">
                <Sparkles />
                <span>Assistant IA</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              isActive={isActive("/record")}
              tooltip="Dossier de Santé"
            >
              <Link href="/record">
                <BookHeart />
                <span>Dossier Santé</span>
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
