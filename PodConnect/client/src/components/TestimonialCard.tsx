import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const countryFlags: Record<string, string> = {
  India: "🇮🇳",
  Pakistan: "🇵🇰",
  "Saudi Arabia": "🇸🇦",
  Iran: "🇮🇷",
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full" data-testid={`card-testimonial-${testimonial.id}`}>
      <CardContent className="p-6 space-y-4">
        <Quote className="h-8 w-8 text-primary opacity-20" />

        <p className="text-sm italic leading-relaxed">"{testimonial.quote}"</p>

        <div className="pt-4 border-t flex items-start gap-3">
          <div className="flex-1">
            <p className="font-semibold text-sm" data-testid="text-student-name">
              {testimonial.studentName}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.program} • {testimonial.university}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg" data-testid="text-country-flag">
                {countryFlags[testimonial.country] || "🌍"}
              </span>
              <span className="text-xs text-muted-foreground">
                {testimonial.country} • Class of {testimonial.year}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
