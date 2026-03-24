import { motion } from "framer-motion";
import { Phone, Cog, Rocket } from "lucide-react";

const steps = [
  { icon: Phone, num: "01", title: "Discovery Call", desc: "We learn about your business, your platforms, and your biggest time-wasters." },
  { icon: Cog, num: "02", title: "We Build Your Automations", desc: "Our team designs and builds custom automation workflows tailored to your exact needs." },
  { icon: Rocket, num: "03", title: "You Save Time & Get More Leads", desc: "Sit back while your social media runs on autopilot. We handle maintenance and optimization." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        className="font-display font-bold text-3xl md:text-4xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        How It <span className="gradient-text">Works</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40" />

        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border border-primary/20 mb-6 relative">
              <s.icon className="h-8 w-8 text-primary" />
              <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                {s.num}
              </span>
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
