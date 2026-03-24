import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
            Ready to Put Your Social Media on <span className="gradient-text">Autopilot?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Book a free 15-minute strategy call and we'll show you exactly which automations can save you the most time and money.
          </p>
        </motion.div>

        <motion.div
          className="glass-card p-8 md:p-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your Name" required className="bg-background/50 border-border/30" />
            <Input type="email" placeholder="Email Address" required className="bg-background/50 border-border/30" />
            <Input placeholder="Instagram / Facebook URL" className="bg-background/50 border-border/30" />
            <Textarea placeholder="Tell us about your business and goals..." rows={4} className="bg-background/50 border-border/30" />
            <Button type="submit" className="w-full glow-blue" size="lg" disabled={loading}>
              {loading ? "Sending..." : (
                <>Book Your Free Call Now <ArrowRight className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </form>
        </motion.div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Or email us directly at <a href="mailto:hello@autoflowagency.com" className="text-primary hover:underline">hello@autoflowagency.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
