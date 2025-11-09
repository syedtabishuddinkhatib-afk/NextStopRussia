import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, GraduationCap, DollarSign, Calendar } from "lucide-react";
import type { Program } from "@shared/schema";

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card className="hover-elevate" data-testid={`card-program-${program.id}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
            <Badge variant="secondary" data-testid="badge-category">{program.category}</Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {program.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {program.description}
          </p>
        )}

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="text-sm font-medium">{program.duration}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <GraduationCap className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Medium</p>
              <p className="text-sm font-medium">{program.medium}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <DollarSign className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Tuition Fees</p>
              <p className="text-sm font-medium">{program.tuitionFees}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Intakes</p>
              <p className="text-sm font-medium">{program.admissionIntakes}</p>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground mb-1">Eligibility:</p>
          <p className="text-sm">{program.eligibility}</p>
        </div>
      </CardContent>
    </Card>
  );
}
