import { Facebook, Globe, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-10 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <Globe className="h-5 w-5 text-primary" />
            <span>AutoFlow</span>
            <span className="text-primary">Agency</span>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">Marketing-first web experiences designed to grow audiences and turn traffic into customers.</p>
        </div>

        <div className="grid w-full gap-8 sm:grid-cols-2 md:w-auto md:grid-cols-1 md:gap-10">
          <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground md:items-start">
            <span className="font-medium text-foreground">Explore</span>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <a href="#services" className="hover:text-foreground transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground md:items-start">
            <span className="font-medium text-foreground">Follow us</span>
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              <a
                href="https://www.instagram.com/growwithbaidi/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <svg viewBox="0 0 256 256" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M176 32h-24v88a72 72 0 1 1-72-72v24a48 48 0 1 0 48 48V32z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/growwithbaidi/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/growwithbaidi/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/baidi420/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border/30 pt-6 text-center text-xs text-muted-foreground md:text-left">
        <p>© {new Date().getFullYear()} AutoFlow Agency. All rights reserved.</p>
        <p className="mt-1">Building websites that generate leads and grow businesses.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
