import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  FileText,
  Send,
  CreditCard,
  Mail,
  FileCheck,
  Plane,
  ArrowRight,
} from "lucide-react";

export default function AdmissionProcess() {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "Submit Application Form",
      description:
        "Complete our comprehensive application form with your academic details, program preferences, and personal information.",
    },
    {
      number: 2,
      icon: Send,
      title: "Get Offer Letter",
      description:
        "Receive your provisional offer letter from the university within 5-7 business days after document verification.",
    },
    {
      number: 3,
      icon: CreditCard,
      title: "Pay Admission/Invitation Fees",
      description:
        "Submit the required admission and invitation letter processing fees as per university requirements.",
    },
    {
      number: 4,
      icon: Mail,
      title: "Receive University Invitation",
      description:
        "Get your official invitation letter from the Russian university, required for visa application.",
    },
    {
      number: 5,
      icon: FileCheck,
      title: "Apply for Student Visa",
      description:
        "Submit your visa application with the invitation letter and required documents. We'll guide you through every step.",
    },
    {
      number: 6,
      icon: Plane,
      title: "Fly to Russia",
      description:
        "Travel to Russia with our complete pre-departure guidance. We'll arrange airport pickup and accommodation assistance.",
    },
  ];

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">Admission Process</h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            A transparent, step-by-step journey from application to arrival in Russia. We're with you every step of the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.number} className="relative">
                <Card className="overflow-hidden" data-testid={`card-step-${step.number}`}>
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <div className="text-sm font-medium text-primary mb-1">
                              Step {step.number}
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {!isLast && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Download Guide */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-accent/50">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-xl font-semibold">
                Download Our Complete Admission Guide
              </h3>
              <p className="text-sm text-muted-foreground">
                Get a detailed PDF guide covering the entire admission process, document requirements, fees, and timeline.
              </p>
              <Button size="lg" data-testid="button-download-guide">
                Download Admission Guide (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center space-y-4">
          <h3 className="text-2xl font-semibold">Ready to Start?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have questions about the admission process? Contact us or start your application today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" data-testid="button-start-application">
                Start Your Application
              </Button>
            </Link>
            <Link href="/required-documents">
              <Button size="lg" variant="outline" data-testid="button-view-documents">
                View Required Documents
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
