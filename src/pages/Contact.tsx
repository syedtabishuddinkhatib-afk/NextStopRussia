import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertInquiry } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    programInterest: "",
    educationLevel: "",
    message: "",
  });

  const submitInquiryMutation = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response;
    },
    onSuccess: (response: any) => {
      toast({
        title: "Inquiry Submitted Successfully!",
        description: response.message || "We'll get back to you within 24 hours via email or WhatsApp.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        programInterest: "",
        educationLevel: "",
        message: "",
      });
    },
    onError: (error: any) => {
      const errorMessage = error?.error || error?.message || "Please try again or contact us via WhatsApp.";
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.country || !formData.programInterest || !formData.educationLevel) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    submitInquiryMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">Contact Us</h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey to study in Russia? Fill out the form below or reach out to us via WhatsApp. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Get in Touch</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm mb-1">Email</p>
                    <a
                      href="mailto:info@nextstoprussia.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-contact-email"
                    >
                      info@nextstoprussia.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm mb-1">Phone</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>India: +91-XXXXXXXXXX</p>
                      <p>Pakistan: +92-XXXXXXXXXX</p>
                      <p>Saudi Arabia: +966-XXXXXXXXXX</p>
                      <p>Iran: +98-XXXXXXXXXX</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm mb-1">Office</p>
                    <p className="text-sm text-muted-foreground">
                      Regional offices in India, Pakistan, Saudi Arabia, and Iran
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 space-y-4">
                <div className="text-center space-y-3">
                  <svg className="h-12 w-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <h3 className="text-lg font-semibold">Chat with Admission Advisor</h3>
                  <p className="text-sm opacity-90">
                    Get instant answers to your questions via WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full bg-white text-primary hover:bg-white/90 border-white"
                      data-testid="button-whatsapp-chat"
                    >
                      Start WhatsApp Chat
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <h3 className="text-2xl font-semibold">Send Us Your Inquiry</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-sm">Personal Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          data-testid="input-name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          data-testid="input-email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          data-testid="input-phone"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Select
                          value={formData.country}
                          onValueChange={(value) => handleInputChange("country", value)}
                          required
                        >
                          <SelectTrigger id="country" data-testid="select-country">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="India">🇮🇳 India</SelectItem>
                            <SelectItem value="Pakistan">🇵🇰 Pakistan</SelectItem>
                            <SelectItem value="Saudi Arabia">🇸🇦 Saudi Arabia</SelectItem>
                            <SelectItem value="Iran">🇮🇷 Iran</SelectItem>
                            <SelectItem value="Other">🌍 Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Academic Background */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-sm">Academic Background</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="program">Program Interest *</Label>
                        <Select
                          value={formData.programInterest}
                          onValueChange={(value) => handleInputChange("programInterest", value)}
                          required
                        >
                          <SelectTrigger id="program" data-testid="select-program">
                            <SelectValue placeholder="Select program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="MBBS / MD">MBBS / MD</SelectItem>
                            <SelectItem value="Dentistry">Dentistry</SelectItem>
                            <SelectItem value="Pharmacy">Pharmacy</SelectItem>
                            <SelectItem value="Nursing">Nursing</SelectItem>
                            <SelectItem value="Engineering">Engineering</SelectItem>
                            <SelectItem value="Business & Management">Business & Management</SelectItem>
                            <SelectItem value="Computer Science">Computer Science</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="level">Education Level *</Label>
                        <Select
                          value={formData.educationLevel}
                          onValueChange={(value) => handleInputChange("educationLevel", value)}
                          required
                        >
                          <SelectTrigger id="level" data-testid="select-level">
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Bachelor's">Bachelor's Program</SelectItem>
                            <SelectItem value="Master's">Master's Program</SelectItem>
                            <SelectItem value="PhD">PhD Program</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your academic background, questions, or special requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      data-testid="textarea-message"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={submitInquiryMutation.isPending}
                    data-testid="button-submit-inquiry"
                  >
                    {submitInquiryMutation.isPending ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
