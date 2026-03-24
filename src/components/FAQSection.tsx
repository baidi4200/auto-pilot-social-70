import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is social media automation?", a: "It's the process of using smart software workflows to handle repetitive tasks like posting, replying, lead capture, and reporting — so you don't have to do them manually." },
  { q: "Will my accounts get banned?", a: "No. We use official APIs and approved integrations. Everything is safe, compliant, and within platform guidelines." },
  { q: "How fast can you set things up?", a: "Most workflows are live within 3–5 business days after our discovery call." },
  { q: "Do I need any technical knowledge?", a: "Not at all. We handle everything. You just tell us what you need, and we build it." },
  { q: "Can I cancel anytime?", a: "Yes, all plans are month-to-month with no long-term contracts." },
  { q: "What tools do you use?", a: "We use n8n, a powerful enterprise-grade automation platform, along with official APIs for Instagram, Facebook, TikTok, and 400+ other apps." },
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
