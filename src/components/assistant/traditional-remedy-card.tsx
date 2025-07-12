/**
 * @fileoverview Component for displaying a single traditional remedy with its status.
 */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TraditionalRemedy } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, Info, XCircle } from "lucide-react";

const statusConfig = {
    approved: {
        icon: CheckCircle2,
        color: "text-green-600",
        bgColor: "bg-green-50"
    },
    not_recommended: {
        icon: XCircle,
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    neutral: {
        icon: Info,
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    }
}

export function TraditionalRemedyCard({ remedyName, status, justification }: TraditionalRemedy) {
    const { icon: Icon, color, bgColor } = statusConfig[status];

  return (
    <Card className={cn("border-l-4", bgColor)} style={{ borderLeftColor: `hsl(var(--${status === 'approved' ? 'primary' : status === 'not_recommended' ? 'destructive' : 'secondary'}))`}}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold flex items-center gap-2">
            <Icon className={cn("h-5 w-5", color)} />
            {remedyName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{justification}</p>
      </CardContent>
    </Card>
  );
}
