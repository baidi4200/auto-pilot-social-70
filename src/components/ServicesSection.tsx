import { motion } from "framer-motion";
import { Globe, MonitorSmartphone, Building2, ShoppingCart, Briefcase, RefreshCw, Gauge } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Business Websites",
    desc: "Tailored, high-performance websites built from the ground up to reflect your brand and convert visitors into paying customers.",
  },
  {
    icon: MonitorSmartphone,
    title: "Landing Pages",
    desc: "High-converting, laser-focused landing pages designed to drive leads, sales, and sign-ups from your campaigns.",
  },
  {
    icon: Building2,
    title: "Corporate Websites",
    desc: "Professional, credibility-building websites for established businesses that need to make a powerful first impression.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    desc: "Feature-rich online stores built to sell. Fast, secure, and optimized for a seamless shopping experience that drives revenue.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    desc: "Stunning portfolio sites that showcase your work and help you win more clients — designed to impress at first glance.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Transform your outdated website into a modern, high-performing asset that reflects where your business is today.",
  },
  {
    icon: Gauge,
    title: "Website Optimization",
    desc: "Speed, SEO, and conversion rate improvements for your existing website — so it ranks higher and converts more visitors.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-muted/20">
    <div className="container mx-auto max-w-6xl">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
          Our <span className="gradient-text">Web Development Services</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Custom-built websites that establish your credibility, generate leads, and help your business grow online.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="glass-card-hover p-6 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-4">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-sm mb-2">{s.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
