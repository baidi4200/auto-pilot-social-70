import { motion } from "framer-motion";
import { Star, Globe, TrendingUp, Users } from "lucide-react";

const testimonials = [
  {
    quote: "Our new website brought in 3x more inquiries within the first month. It's fast, looks incredible, and actually converts visitors into clients.",
    name: "Michael T.",
    role: "Restaurant Owner",
  },
  {
    quote: "They redesigned our outdated website in under two weeks. Our bounce rate dropped significantly and we're getting more calls than ever before.",
    name: "Priya L.",
    role: "Law Firm Partner",
  },
  {
    quote: "The e-commerce site they built transformed our business. Our online sales tripled within 60 days of launch. Best investment we've ever made.",
    name: "David K.",
    role: "Online Retailer",
  },
];

const stats = [
  { icon: Globe, value: "50+", label: "Websites Launched" },
  { icon: Users, value: "98%", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "3x", label: "Average Lead Increase" },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.h2
        className="font-display font-bold text-3xl md:text-4xl text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Real Results for <span className="gradient-text">Real Businesses</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="glass-card-hover p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.quote}"</p>
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="text-center glass-card p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <s.icon className="h-8 w-8 text-accent mx-auto mb-3" />
            <p className="font-display font-bold text-3xl gradient-text mb-1">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
