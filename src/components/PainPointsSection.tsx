import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, EyeOff, DollarSign } from "lucide-react";

const pains = [
  { icon: AlertTriangle, title: "An outdated or slow website is costing you credibility every single day" },
  { icon: TrendingDown, title: "Visitors leave without converting because your site isn't built to generate leads" },
  { icon: EyeOff, title: "Competitors with stronger online presence are capturing your potential customers" },
  { icon: DollarSign, title: "You're spending money on ads that send traffic to a website that doesn't convert" },
];

const PainPointsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.h2
        className="font-display font-bold text-3xl md:text-4xl text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Your Business Deserves Better Than a{" "}
        <span className="gradient-text">Mediocre Website</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {pains.map((p, i) => (
          <motion.div
            key={i}
            className="glass-card-hover p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-destructive/10 mb-4">
              <p.icon className="h-6 w-6 text-destructive" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.title}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        We fix all of this.{" "}
        <span className="text-foreground font-semibold">We build websites that work as hard as you do.</span>
      </motion.p>
    </div>
  </section>
);

export default PainPointsSection;
