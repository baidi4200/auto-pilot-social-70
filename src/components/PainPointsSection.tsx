import { motion } from "framer-motion";
import { Clock, MessageSquareOff, BarChart3, UserX } from "lucide-react";

const pains = [
  { icon: Clock, title: "Spending hours posting the same content on 3 platforms" },
  { icon: MessageSquareOff, title: "Missing DMs and comments from potential customers" },
  { icon: BarChart3, title: "No time to track analytics and create reports" },
  { icon: UserX, title: "Losing leads because you can't follow up fast enough" },
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
        Tired of Doing Everything <span className="gradient-text">Manually?</span>
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
        What if all of this ran on autopilot?{" "}
        <span className="text-foreground font-semibold">That's exactly what we build for you.</span>
      </motion.p>
    </div>
  </section>
);

export default PainPointsSection;
