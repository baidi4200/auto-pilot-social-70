import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-10 px-4">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2 font-display font-bold text-lg">
        <Zap className="h-5 w-5 text-primary" />
        <span>AutoFlow</span>
        <span className="text-primary">Agency</span>
      </div>

      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
        <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>

      <div className="text-xs text-muted-foreground text-center">
        <p>© {new Date().getFullYear()} AutoFlow Agency. All rights reserved.</p>
        <p className="mt-1">Powered by smart automation workflows</p>
      </div>
    </div>
  </footer>
);

export default Footer;
