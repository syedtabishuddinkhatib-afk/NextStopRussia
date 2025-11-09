import { useRoute, Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import type { University } from "@shared/schema";
import {
  Building,
  Calendar,
  Globe,
  FileCheck,
  ArrowLeft,
  Loader2,
  GraduationCap,
  MapPin,
  Award,
} from "lucide-react";

export default function UniversityDetail() {
  const [, params] = useRoute("/universities/:id");
  const universityId = params?.id;

  const { data: university, isLoading } = useQuery<University>({
    queryKey: ["/api/universities", universityId],
    enabled: !!universityId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" data-testid="loader-university-detail" />
      </div>
    );
  }

  if (!university) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold mb-4">University Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The university you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/universities">
          <Button data-testid="button-back-to-universities">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Universities
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/universities">
          <Button variant="outline" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="h-4 w-4" />
            Back to Universities
          </Button>
        </Link>

        {/* University Header */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold">{university.name}</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">{university.location}</span>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {university.established && (
            <Card>
              <CardContent className="p-6 text-center space-y-2">
                <Calendar className="h-8 w-8 mx-auto text-primary" />
                <p className="text-sm text-muted-foreground">Established</p>
                <p className="text-xl font-semibold">{university.established}</p>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardContent className="p-6 text-center space-y-2">
              <Globe className="h-8 w-8 mx-auto text-primary" />
              <p className="text-sm text-muted-foreground">Medium of Instruction</p>
              <p className="text-xl font-semibold">{university.medium}</p>
            </CardContent>
          </Card>

          {university.ranking && (
            <Card>
              <CardContent className="p-6 text-center space-y-2">
                <Award className="h-8 w-8 mx-auto text-primary" />
                <p className="text-sm text-muted-foreground">Ranking</p>
                <p className="text-xl font-semibold">{university.ranking}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* About the University */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">About the University</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed">{university.description}</p>
          </CardContent>
        </Card>

        {/* Programs Offered */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Programs Offered</h2>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {university.programs.map((program, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm px-4 py-2"
                  data-testid={`badge-program-detail-${index}`}
                >
                  {program}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Authorization */}
        {university.authorizationLetterUrl && (
          <Card className="mb-8 bg-accent/30">
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Official Partnership</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                NextStopRussia is an officially authorized partner of {university.name}. You can view and verify our authorization letter below.
              </p>
              <a
                href={university.authorizationLetterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2" data-testid="button-view-authorization-detail">
                  <FileCheck className="h-4 w-4" />
                  View Authorization Letter
                </Button>
              </a>
            </CardContent>
          </Card>
        )}

        {/* CTA */}
        <div className="text-center space-y-6 py-8">
          <h3 className="text-2xl font-semibold">
            Interested in {university.name}?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contact us today to start your application process. Our team will guide you through every step.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-apply-university">
                Apply Now
              </Button>
            </Link>
            <Link href="/admission-process">
              <Button size="lg" variant="outline" data-testid="button-view-process-detail">
                View Admission Process
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
