import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$297",
    period: "/month",
    popular: false,
    features: [
      "2 automation workflows",
      "1 platform (IG, FB, or TikTok)",
      "Basic lead capture setup",
      "Email support",
      "Monthly performance check-in",
    ],
    bestFor: "Solopreneurs & small businesses just getting started",
  },
  {
    name: "Growth",
    price: "$597",
    period: "/month",
    popular: true,
    features: [
      "5 automation workflows",
      "All 3 platforms (IG + FB + TikTok)",
      "Lead capture + auto-replies + AI captions",
      "Automated weekly reports",
      "Priority support",
      "Monthly strategy call",
    ],
    bestFor: "Growing brands ready to scale",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      "Unlimited workflows",
      "Full platform integration",
      "Custom CRM & e-commerce automation",
      "Dedicated automation manager",
      "24/7 priority support",
    ],
    bestFor: "Agencies & large brands",
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding bg-muted/20">
    <div className="container mx-auto max-w-6xl">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
          Simple, <span className="gradient-text">Transparent Pricing</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            className={`glass-card-hover p-8 flex flex-col relative ${p.popular ? "border-primary/50 glow-blue" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="font-display font-bold text-xl mb-1">{p.name}</h3>
            <div className="mb-6">
              <span className="font-display font-bold text-4xl">{p.price}</span>
              <span className="text-muted-foreground text-sm">{p.period}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mb-4">Best for: {p.bestFor}</p>
            <Button asChild variant={p.popular ? "default" : "outline"} className="w-full">
              <a href="#contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
