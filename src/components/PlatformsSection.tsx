import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "TypeScript", "WordPress", "Shopify", "Webflow",
  "Tailwind CSS", "Node.js", "Figma", "Framer", "Stripe", "Vercel",
  "Google Analytics", "SEO Optimized",
];

const PlatformsSection = () => (
  <section id="portfolio" className="section-padding bg-muted/20">
    <div className="container mx-auto max-w-5xl text-center">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
          Technologies We <span className="gradient-text">Build With</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We use modern, industry-leading technologies to build websites that are fast, secure, scalable, and future-proof.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {technologies.map((t) => (
          <span key={t} className="px-5 py-2.5 glass-card text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default">
            {t}
          </span>
        ))}
      </motion.div>

      <p className="text-muted-foreground">
        Every website we build is <span className="text-primary font-semibold">fully responsive, lightning-fast, and SEO-ready</span> from day one.
      </p>
    </div>
  </section>
);

export default PlatformsSection;
