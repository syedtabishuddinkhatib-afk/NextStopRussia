import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  FileText,
  GraduationCap,
  Image as ImageIcon,
  Heart,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function RequiredDocuments() {
  const documents = [
    {
      icon: FileText,
      title: "Passport Copy",
      description: "Valid passport with at least 18 months validity remaining",
      required: true,
    },
    {
      icon: GraduationCap,
      title: "Academic Certificates",
      description:
        "High school diploma for bachelor's programs, bachelor's degree for postgraduate programs. All certificates must be attested.",
      required: true,
    },
    {
      icon: ImageIcon,
      title: "Passport-size Photos",
      description: "Recent passport-size photographs (3×4 cm) with white background",
      required: true,
    },
    {
      icon: Heart,
      title: "Medical Certificate",
      description:
        "General health certificate and HIV test report from recognized medical facility",
      required: true,
    },
    {
      icon: Shield,
      title: "COVID-19 Vaccination Proof",
      description: "Certificate showing complete COVID-19 vaccination",
      required: true,
    },
    {
      icon: FileText,
      title: "Application Form",
      description:
        "Completed application form with all personal and academic details",
      required: true,
    },
  ];

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">Required Documents</h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Complete checklist of documents needed for admission to Russian universities. Ensure all documents are prepared before applying.
          </p>
        </div>

        {/* Document Checklist */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <Card key={index} data-testid={`card-document-${index}`}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-semibold">{doc.title}</h3>
                        {doc.required && (
                          <div className="flex items-center gap-1 text-sm text-primary">
                            <CheckCircle className="h-4 w-4" />
                            <span className="font-medium">Required</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Important Notes */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-accent/30">
            <CardHeader>
              <h3 className="text-xl font-semibold">Important Notes</h3>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    All academic documents must be attested by relevant authorities in your home country
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Documents in languages other than English or Russian must be translated and notarized
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Ensure your passport is valid for at least 18 months from the date of application
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Medical certificates should be recent (not older than 3 months)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Keep multiple copies of all documents for visa application and university registration
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Country-Specific Requirements */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Country-Specific Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["India 🇮🇳", "Pakistan 🇵🇰", "Saudi Arabia 🇸🇦", "Iran 🇮🇷"].map(
              (country, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-lg">{country}</h3>
                    <p className="text-sm text-muted-foreground">
                      Additional requirements may apply. Contact us for detailed information specific to your country.
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">Need Help with Documents?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our team can guide you through the document preparation process and answer any questions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" data-testid="button-contact-support">
                Contact Support
              </Button>
            </Link>
            <Link href="/admission-process">
              <Button size="lg" variant="outline" data-testid="button-view-process">
                View Admission Process
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
