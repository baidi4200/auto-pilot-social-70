import { motion } from "framer-motion";
import { Star, Clock, Zap, TrendingUp } from "lucide-react";

const testimonials = [
  { quote: "We went from manually replying to 200+ DMs a day to fully automated responses. Our response time dropped from 6 hours to under 30 seconds.", name: "Sarah K.", role: "E-commerce Brand Owner" },
  { quote: "The weekly reports alone save me 5 hours a week. I finally know what's working without opening 10 tabs.", name: "Ahmed R.", role: "Digital Marketing Manager" },
  { quote: "They set up a lead capture system that brought in 300+ leads in the first month — all on autopilot.", name: "Jessica M.", role: "Fitness Coach" },
];

const stats = [
  { icon: Clock, value: "15+", label: "Hours Saved Per Week" },
  { icon: Zap, value: "3x", label: "Faster Lead Response" },
  { icon: TrendingUp, value: "300%", label: "More Leads Captured" },
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
