import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/universities", label: "Universities" },
    { href: "/programs", label: "Programs" },
    { href: "/admission-process", label: "Admission Process" },
    { href: "/verify-authorization", label: "Verify Authorization" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === href;
    return location.startsWith(href);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" data-testid="link-home">
              <span className="text-2xl font-bold text-primary cursor-pointer">
                NextStopRussia
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`cursor-pointer text-sm font-medium transition-colors hover:text-primary ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                    data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <Button data-testid="button-apply-now" size="default">
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu-toggle"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-background" data-testid="mobile-menu">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    className={`block px-4 py-2 rounded-md text-sm font-medium cursor-pointer hover-elevate active-elevate-2 ${
                      isActive(link.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <Link href="/contact">
                <Button
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="button-mobile-apply-now"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
