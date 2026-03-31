import { motion } from "framer-motion";
import { Bot, Workflow, Headphones, Plug, BrainCircuit, Sparkles } from "lucide-react";

const aiServices = [
  { icon: BrainCircuit, title: "AI Business Automation", desc: "Automate repetitive business processes and free up your team to focus on high-value work." },
  { icon: Bot, title: "AI Chatbots", desc: "Smart chatbots that engage visitors, answer questions, and capture leads 24/7." },
  { icon: Workflow, title: "Workflow Automation", desc: "Connect your tools and streamline operations with intelligent automated workflows." },
  { icon: Headphones, title: "AI-Powered Customer Support", desc: "Deliver instant, intelligent responses to customer inquiries at any time of day." },
  { icon: Plug, title: "AI Integrations for Businesses", desc: "Seamlessly integrate AI capabilities into your existing business systems and processes." },
];

const AiComingSoonSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest border border-accent/40 rounded-full text-accent bg-accent/5">
          <Sparkles className="h-3.5 w-3.5" />
          Coming Soon
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          AI Automation Services —{" "}
          <span className="gradient-text">Coming Soon</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We're expanding our services to include powerful AI solutions for your business. In the near future, we'll help you automate smarter, serve customers better, and scale faster with AI.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {aiServices.map((s, i) => (
          <motion.div
            key={i}
            className="glass-card p-6 flex flex-col opacity-80 hover:opacity-100 transition-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 mb-4">
              <s.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-sm mb-2">{s.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-sm text-muted-foreground mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Want to be the first to know when AI services launch?{" "}
        <a href="#contact" className="text-primary hover:underline font-medium">
          Get in touch and we'll notify you.
        </a>
      </motion.p>
    </div>
  </section>
);

export default AiComingSoonSection;
