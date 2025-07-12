"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Remedy } from "@/lib/types";

export function RemedyCard({ title, description, icon: Icon }: Remedy) {
  return (
    <Card className="bg-accent/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
