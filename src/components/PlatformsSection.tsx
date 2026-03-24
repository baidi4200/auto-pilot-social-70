import { motion } from "framer-motion";

const platforms = [
  "Instagram", "Facebook", "TikTok", "WhatsApp", "Google Sheets", "HubSpot",
  "Mailchimp", "Slack", "Telegram", "Shopify", "WordPress", "Notion", "Gmail", "Google Calendar"
];

const PlatformsSection = () => (
  <section className="section-padding bg-muted/20">
    <div className="container mx-auto max-w-5xl text-center">
      <motion.h2
        className="font-display font-bold text-3xl md:text-4xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Platforms & Tools We <span className="gradient-text">Integrate</span>
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {platforms.map((p) => (
          <span key={p} className="px-5 py-2.5 glass-card text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default">
            {p}
          </span>
        ))}
      </motion.div>

      <p className="text-muted-foreground">
        And <span className="text-primary font-semibold">400+ more apps</span> through our automation engine.
      </p>
    </div>
  </section>
);

export default PlatformsSection;
