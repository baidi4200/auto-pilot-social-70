import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Landing Page",
    price: "From $997",
    period: " one-time",
    popular: false,
    features: [
      "Single high-converting page",
      "Mobile-responsive design",
      "Contact / lead capture form",
      "SEO basics setup",
      "Fast load speed optimized",
      "2 rounds of revisions",
    ],
    bestFor: "Startups and campaigns that need a focused, conversion-ready page",
  },
  {
    name: "Business Website",
    price: "From $2,497",
    period: " one-time",
    popular: true,
    features: [
      "5–10 custom pages",
      "Mobile-responsive design",
      "SEO optimization",
      "Contact forms & lead capture",
      "Google Analytics integration",
      "3 rounds of revisions",
      "30-day post-launch support",
    ],
    bestFor: "Small businesses and growing companies ready to establish a strong online presence",
  },
  {
    name: "E-commerce / Custom",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      "Full e-commerce or custom build",
      "Product catalog & checkout",
      "Payment gateway integration",
      "CMS & admin dashboard",
      "Performance & SEO optimized",
      "Dedicated project manager",
    ],
    bestFor: "Online stores, enterprises, and businesses with unique requirements",
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding bg-muted/20">
    <div className="container mx-auto max-w-6xl">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
          Simple, <span className="gradient-text">Transparent Pricing</span>
        </h2>
        <p className="text-muted-foreground text-lg">No hidden fees. No surprises. Just results.</p>
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
              <span className="font-display font-bold text-3xl">{p.price}</span>
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
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
