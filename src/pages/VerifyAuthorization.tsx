import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileCheck, Download, CheckCircle, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { University } from "@shared/schema";
import { QRCodeDisplay } from "@/components/QRCodeDisplay";

export default function VerifyAuthorization() {
  const { data: universities = [] } = useQuery<University[]>({
    queryKey: ["/api/universities"],
  });

  const universitiesWithAuth = universities.filter((u) => u.authorizationLetterUrl);

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <FileCheck className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Verify Our Authorization</h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            NextStopRussia is officially authorized by the following universities for international student admissions. You can verify our partnerships by viewing the official authorization letters below or contacting the universities directly.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-accent/30">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Official Partnerships</h3>
                  <p className="text-sm text-muted-foreground">
                    All authorization letters are genuine and verifiable
                  </p>
                </div>
                <div className="space-y-2">
                  <Download className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Downloadable PDFs</h3>
                  <p className="text-sm text-muted-foreground">
                    Download and verify documents independently
                  </p>
                </div>
                <div className="space-y-2">
                  <FileCheck className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold">QR Verification</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick verification via QR codes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Authorization Letters */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Official Authorization Letters
          </h2>

          {universitiesWithAuth.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universitiesWithAuth.map((university) => (
                <Card key={university.id} data-testid={`card-authorization-${university.id}`}>
                  <CardHeader>
                    <div className="space-y-3">
                      <div className="h-16 flex items-center justify-center">
                        <h3 className="text-lg font-semibold text-center line-clamp-2">
                          {university.name}
                        </h3>
                      </div>
                      <Badge variant="secondary" className="w-full justify-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified Partner
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground text-center">
                      {university.location}
                    </p>

                    <div className="space-y-2">
                      {university.authorizationLetterUrl && university.authorizationLetterUrl !== "#" ? (
                        <>
                          <a
                            href={university.authorizationLetterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full gap-2"
                              data-testid={`button-view-letter-${university.id}`}
                            >
                              <FileCheck className="h-4 w-4" />
                              View Letter
                            </Button>
                          </a>

                          <a
                            href={university.authorizationLetterUrl}
                            download
                            className="block"
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full gap-2"
                              data-testid={`button-download-letter-${university.id}`}
                            >
                              <Download className="h-4 w-4" />
                              Download PDF
                            </Button>
                          </a>
                        </>
                      ) : (
                        <div className="bg-accent/30 p-4 rounded-md">
                          <p className="text-sm text-muted-foreground text-center">
                            Authorization letter available upon request. Contact us for verification.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* QR Code for Verification */}
                    <div className="pt-4 border-t">
                      <p className="text-xs text-center text-muted-foreground mb-3">
                        Scan to verify partnership
                      </p>
                      <div className="flex justify-center">
                        <QRCodeDisplay
                          value={`${window.location.origin}/verify/${university.id}`}
                          size={96}
                        />
                      </div>
                      <p className="text-xs text-center text-muted-foreground mt-2">
                        Scan to see verification details
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Authorization letters will be available soon.
              </p>
            </div>
          )}
        </div>

        {/* Verification Instructions */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-center">
                How to Verify Our Partnerships
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <p>
                    <strong>Scan QR Code:</strong> Use your mobile device to scan the QR code below any university card for instant verification.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <p>
                    <strong>Request Authorization Letter:</strong> Contact us to receive the official authorization letter for any university partnership.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <p>
                    <strong>Contact the University:</strong> Independently verify by contacting the university's international admissions office directly.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <p>
                    <strong>Visit Our Office:</strong> Schedule an appointment to view physical copies of all authorization letters and official documentation.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/30 rounded-md">
                <p className="text-sm font-medium mb-2">Need Immediate Verification?</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Contact us via WhatsApp or email, and we'll provide you with complete authorization documentation within 24 hours.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      WhatsApp Us
                    </Button>
                  </a>
                  <a
                    href="mailto:info@nextstoprussia.com"
                    className="inline-block"
                  >
                    <Button size="sm" variant="outline" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Email Us
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 space-y-4">
          <h3 className="text-2xl font-semibold">Still Have Questions?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Contact us directly, and we'll be happy to provide any additional verification or information you need.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2" data-testid="button-whatsapp-verify">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Support
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
