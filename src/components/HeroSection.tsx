import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Globe, label: "50+ Websites Launched" },
  { icon: TrendingUp, label: "3x Average Lead Increase" },
  { icon: Star, label: "100% Client Satisfaction" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
    {/* Animated gradient blobs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[120px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse-glow" />
    </div>

    <div className="container mx-auto text-center relative z-10 max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest border border-primary/30 rounded-full text-primary bg-primary/5">
          Custom Website Development Agency
        </span>
      </motion.div>

      <motion.h1
        className="font-display font-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Websites That Win Clients{" "}
        <span className="gradient-text">and Grow Your Business</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        We build fast, modern, and conversion-focused websites for startups, small businesses, and growing companies. Establish your online presence, generate more leads, and stand out from competitors.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Button asChild size="lg" className="text-base px-8 glow-blue">
          <a href="#contact">
            Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="text-base px-8 border-border/50 hover:bg-muted/30">
          <a href="#services">See Our Services</a>
        </Button>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6 md:gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-2 text-sm text-muted-foreground">
            <s.icon className="h-4 w-4 text-accent" />
            <span>{s.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
