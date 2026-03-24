import { motion } from "framer-motion";
import { UserPlus, CalendarClock, MessageCircle, Sparkles, FileBarChart, Bell, Hash, ShoppingCart } from "lucide-react";

const services = [
  { icon: UserPlus, title: "Lead Capture & CRM Automation", desc: "Automatically capture leads from comments, DMs, and ad forms — route them to your CRM, Google Sheet, and trigger welcome messages instantly." },
  { icon: CalendarClock, title: "Content Scheduling & Cross-Posting", desc: "Create once, publish everywhere. Smart workflows auto-schedule and post across Instagram, Facebook, and TikTok." },
  { icon: MessageCircle, title: "Comment & DM Auto-Replies", desc: "Instant, intelligent auto-replies to common DMs and comments with pricing, links, and FAQs — 24/7." },
  { icon: Sparkles, title: "AI-Powered Caption Generation", desc: "AI generates scroll-stopping captions, hashtag sets, and content calendar ideas tailored to your niche." },
  { icon: FileBarChart, title: "Automated Weekly/Monthly Reporting", desc: "Beautiful formatted reports with engagement stats delivered to your inbox automatically." },
  { icon: Bell, title: "Review & Reputation Monitoring", desc: "Real-time alerts for every mention, tag, and review — delivered to Slack, Telegram, or WhatsApp." },
  { icon: Hash, title: "UGC & Hashtag Tracking", desc: "Monitor branded hashtags and collect user-generated content into organized folders for reposting." },
  { icon: ShoppingCart, title: "Abandoned Cart Follow-Ups", desc: "Auto-trigger follow-up messages via DM, Messenger, or email when customers drop off." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-muted/20">
    <div className="container mx-auto max-w-6xl">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
          Our <span className="gradient-text">Automation Services</span>
        </h2>
        <p className="text-muted-foreground text-lg">Powerful workflows that save you 15+ hours every week</p>
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
