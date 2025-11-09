import { useRoute, Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import type { University } from "@shared/schema";
import {
  CheckCircle,
  Building,
  MapPin,
  GraduationCap,
  FileCheck,
  ArrowLeft,
  Loader2,
} from "lucide-react";

export default function Verify() {
  const [, params] = useRoute("/verify/:id");
  const universityId = params?.id;

  const { data: university, isLoading } = useQuery<University>({
    queryKey: ["/api/universities", universityId],
    enabled: !!universityId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" data-testid="loader-verify" />
      </div>
    );
  }

  if (!university) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-bold">Verification Failed</h1>
          <p className="text-muted-foreground">
            Unable to verify this university partnership. The ID may be invalid or the partnership may not exist.
          </p>
          <Link href="/verify-authorization">
            <Button data-testid="button-view-all-verifications">
              View All Verified Partnerships
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Verification Success Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="h-6 w-6 text-primary" />
            <span className="font-semibold text-primary">Verified Partnership</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Partnership Verified Successfully
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This QR code confirms that NextStopRussia is an officially authorized admission partner for the following university.
          </p>
        </div>

        {/* University Information */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{university.name}</h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{university.location}</span>
                </div>
              </div>
              <Badge className="bg-primary text-primary-foreground">
                <CheckCircle className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <p className="text-sm leading-relaxed">{university.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
              {university.established && (
                <div className="flex gap-3">
                  <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Established</p>
                    <p className="text-sm text-muted-foreground">{university.established}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <GraduationCap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Medium of Instruction</p>
                  <p className="text-sm text-muted-foreground">{university.medium}</p>
                </div>
              </div>

              {university.ranking && (
                <div className="flex gap-3 md:col-span-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Ranking</p>
                    <p className="text-sm text-muted-foreground">{university.ranking}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm font-medium mb-3">Programs Offered:</p>
              <div className="flex flex-wrap gap-2">
                {university.programs.map((program, index) => (
                  <Badge key={index} variant="secondary">
                    {program}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Official Partnership Confirmation */}
        <Card className="bg-accent/30 mb-8">
          <CardContent className="p-8 text-center space-y-4">
            <FileCheck className="h-12 w-12 text-primary mx-auto" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Official Authorization Confirmed</h3>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                NextStopRussia holds official authorization from {university.name} to facilitate international student admissions. All admissions processed through NextStopRussia are legitimate and recognized by the university.
              </p>
            </div>
            <div className="pt-4">
              <Link href={`/universities/${university.id}`}>
                <Button size="lg" className="mr-4" data-testid="button-learn-more-verify">
                  Learn More About This University
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" data-testid="button-apply-verify">
                  Apply Now
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Additional Verification Steps */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Additional Verification Steps</h3>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex gap-2">
              <span className="font-bold text-primary">•</span>
              <p>
                Contact {university.name} directly through their official international admissions office to confirm NextStopRussia's partnership status.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-primary">•</span>
              <p>
                Request to view physical copies of authorization letters at any NextStopRussia office.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-primary">•</span>
              <p>
                Verify student testimonials and success stories from previous applicants who secured admission through NextStopRussia.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Verifications */}
        <div className="text-center mt-8">
          <Link href="/verify-authorization">
            <Button variant="outline" className="gap-2" data-testid="button-back-verify">
              <ArrowLeft className="h-4 w-4" />
              View All Verified Partnerships
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
