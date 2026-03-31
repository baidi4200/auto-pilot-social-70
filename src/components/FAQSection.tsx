import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most projects are completed within 1–3 weeks depending on scope. A landing page typically takes 5–7 days, while a full business website takes 2–3 weeks. We'll give you a clear timeline before we start.",
  },
  {
    q: "Do I own my website after it's built?",
    a: "Yes, 100%. You own everything — the design, the code, and the content. Once the project is complete and paid in full, the website is entirely yours.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. Every website we build is fully responsive and optimized for all devices — desktop, tablet, and mobile — from day one.",
  },
  {
    q: "Do you offer website maintenance after launch?",
    a: "Yes. We offer ongoing maintenance and support packages to keep your website secure, updated, and performing at its best. Ask us about options during your consultation.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. Website redesign is one of our core services. Whether your site looks outdated, loads slowly, or isn't converting visitors, we'll transform it into a modern, high-performing asset.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just your business details, goals, and any branding materials you have (logo, colors, etc.). We guide you through the rest — no technical knowledge required on your end.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        className="font-display font-bold text-3xl md:text-4xl text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Frequently Asked <span className="gradient-text">Questions</span>
      </motion.h2>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-border/30">
              <AccordionTrigger className="text-sm font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
