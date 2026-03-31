import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("EmailJS is not configured. Please add your EmailJS IDs to your environment.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setLoading(false);
      toast.success("Message sent! We'll be in touch within 24 hours.");
      formRef.current.reset();
    } catch (error) {
      setLoading(false);
      toast.error("Unable to send the message right now. Please try again later.");
      console.error("EmailJS error:", error);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
            Ready to Build a Website That{" "}
            <span className="gradient-text">Grows Your Business?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get a free consultation and project quote. Tell us about your business and we'll show you exactly what's possible.
          </p>
        </motion.div>

        <motion.div
          className="glass-card p-8 md:p-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <Input name="user_name" placeholder="Your Name" required className="bg-background/50 border-border/30" />
            <Input name="user_email" type="email" placeholder="Email Address" required className="bg-background/50 border-border/30" />
            <Input name="website_url" placeholder="Your Website URL (if you have one)" className="bg-background/50 border-border/30" />
            <Textarea name="message" placeholder="Tell us about your business, your goals, and the type of website you need..." rows={4} className="bg-background/50 border-border/30" />
            <Button type="submit" className="w-full glow-blue" size="lg" disabled={loading}>
              {loading ? "Sending..." : (
                <>Get Your Free Quote <ArrowRight className="ml-2 h-4 w-4" /></>
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
