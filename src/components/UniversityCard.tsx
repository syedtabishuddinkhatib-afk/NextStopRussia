import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileCheck, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import type { University } from "@shared/schema";

interface UniversityCardProps {
  university: University;
}

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Card className="h-full flex flex-col hover-elevate" data-testid={`card-university-${university.id}`}>
      <CardHeader className="space-y-4">
        <div className="h-16 flex items-center justify-center">
          <h3 className="text-xl font-semibold text-center line-clamp-2">
            {university.name}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          {university.location}
        </p>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <p className="text-sm line-clamp-3">{university.description}</p>

        <div className="space-y-2">
          <p className="text-sm font-medium">Popular Programs:</p>
          <div className="flex flex-wrap gap-2">
            {university.programs.slice(0, 3).map((program, index) => (
              <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-program-${index}`}>
                {program}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-2 space-y-1">
          <p className="text-sm">
            <span className="font-medium">Medium:</span>{" "}
            <span className="text-muted-foreground">{university.medium}</span>
          </p>
          {university.established && (
            <p className="text-sm">
              <span className="font-medium">Established:</span>{" "}
              <span className="text-muted-foreground">{university.established}</span>
            </p>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        {university.authorizationLetterUrl && (
          <a
            href={university.authorizationLetterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-2"
              data-testid={`button-authorization-${university.id}`}
            >
              <FileCheck className="h-4 w-4" />
              View Authorization Letter
            </Button>
          </a>
        )}
        <Link href={`/universities/${university.id}`} className="w-full">
          <Button size="sm" className="w-full gap-2" data-testid={`button-learn-more-${university.id}`}>
            Learn More
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
