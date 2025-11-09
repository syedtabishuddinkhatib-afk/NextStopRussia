import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Plane, GraduationCap, Users, Building } from "lucide-react";
import { StatsCounter } from "@/components/StatsCounter";
import { TestimonialCard } from "@/components/TestimonialCard";
import { useQuery } from "@tanstack/react-query";
import type { University, Testimonial } from "@shared/schema";
import heroImage from "@assets/generated_images/Moscow_State_University_hero_c8f0a9f5.png";

export default function Home() {
  const { data: universities = [] } = useQuery<University[]>({
    queryKey: ["/api/universities"],
  });

  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const programCategories = [
    { name: "Medicine", icon: GraduationCap, programs: "MBBS, MD, Dentistry" },
    { name: "Engineering", icon: Building, programs: "Mechanical, Civil, Computer" },
    { name: "Business", icon: Users, programs: "BBA, MBA, Management" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Official Admission Partner for Russia's Top Universities
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-medium">
            Your Verified Gateway to Study in Russia
          </p>
          <p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto">
            Helping students from India, Pakistan, Saudi Arabia, and Iran secure authentic, verified admissions to leading Russian universities.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="text-base px-8 bg-primary/90 backdrop-blur-sm border border-primary-border"
                data-testid="button-hero-apply-now"
              >
                Apply Now
              </Button>
            </Link>
            <Link href="/universities">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-explore"
              >
                Explore Universities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Authorized by Multiple Russian Universities</h3>
                <p className="text-sm text-muted-foreground">
                  Official partnership letters from I.M. Sechenov, Kazan Federal, RUDN, and other top institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">100% Transparent Admission Process</h3>
                <p className="text-sm text-muted-foreground">
                  Clear, step-by-step guidance with complete transparency. No hidden fees or surprises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Plane className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Visa & Pre-departure Support</h3>
                <p className="text-sm text-muted-foreground">
                  Complete assistance with visa application, travel arrangements, and airport pickup in Russia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <StatsCounter value="500+" label="Students Placed" />
            <StatsCounter value="15+" label="Partner Universities" />
            <StatsCounter value="4" label="Countries Served" />
            <StatsCounter value="100%" label="Visa Success Rate" />
          </div>
        </div>
      </section>

      {/* Quick Program Finder */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold">Find Your Program</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore programs across medical, engineering, business, and other fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programCategories.map((category, index) => (
              <Link key={index} href="/programs">
                <Card className="cursor-pointer hover-elevate active-elevate-2" data-testid={`card-program-category-${index}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.programs}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" data-testid={`button-explore-${category.name.toLowerCase()}`}>
                      Explore Programs
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/programs">
              <Button variant="outline" size="lg" data-testid="button-view-all-programs">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold">Our Partner Universities</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Official partnerships with Russia's leading educational institutions
            </p>
          </div>

          {universities.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {universities.slice(0, 3).map((university) => (
                  <Card key={university.id} className="hover-elevate">
                    <CardContent className="p-6 space-y-4">
                      <div className="h-20 flex items-center justify-center border-b pb-4">
                        <h3 className="text-lg font-semibold text-center line-clamp-2">
                          {university.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {university.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {university.programs.slice(0, 2).map((program, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {program}
                          </Badge>
                        ))}
                      </div>
                      <Link href={`/universities/${university.id}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/universities">
                  <Button size="lg" data-testid="button-view-all-universities">
                    View All Universities
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading universities...</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold">Success Stories</h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from students who achieved their dreams with NextStopRussia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold">Why Choose NextStopRussia?</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Verified Partnerships</h3>
                  <p className="text-sm text-muted-foreground">
                    All our university partnerships are backed by official authorization letters that you can verify.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">End-to-End Support</h3>
                  <p className="text-sm text-muted-foreground">
                    From application submission to arrival in Russia, we're with you every step of the way.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Founded by an I.M. Sechenov University graduate with firsthand experience of studying in Russia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base lg:text-lg opacity-90 max-w-2xl mx-auto">
            Join hundreds of students who have successfully enrolled in Russia's top universities through our verified admission process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-white text-primary hover:bg-white/90 border-white"
                data-testid="button-cta-apply"
              >
                Apply Now
              </Button>
            </Link>
            <Link href="/verify-authorization">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-transparent text-white hover:bg-white/10 border-white/50"
                data-testid="button-cta-verify"
              >
                Verify Our Authorization
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
