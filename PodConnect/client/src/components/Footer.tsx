import { Link } from "wouter";
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">NextStopRussia</h3>
            <p className="text-sm text-muted-foreground">
              Your verified gateway to study in Russia's top universities. Official partner for international student admissions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/universities">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-universities">
                    Universities
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-programs">
                    Programs
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/admission-process">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-admission">
                    Admission Process
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/verify-authorization">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-verify">
                    Verify Authorization
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Popular Programs</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">MBBS / MD</li>
              <li className="text-sm text-muted-foreground">Engineering</li>
              <li className="text-sm text-muted-foreground">Business & Management</li>
              <li className="text-sm text-muted-foreground">Computer Science</li>
              <li className="text-sm text-muted-foreground">Dentistry</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:info@nextstoprussia.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-email"
                >
                  info@nextstoprussia.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>India: +91-XXXXXXXXXX</div>
                  <div>Pakistan: +92-XXXXXXXXXX</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NextStopRussia. All rights reserved. | Official Partner for Russian Universities
          </p>
        </div>
      </div>
    </footer>
  );
}
