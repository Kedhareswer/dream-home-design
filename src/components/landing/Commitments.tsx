import { ShieldCheck, MessageSquare, Home, Ruler, Clock, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Total Accountability",
    description: "We take full responsibility for the project. No finger-pointing. If a challenge arises, we solve it.",
  },
  {
    icon: MessageSquare,
    title: "Radical Transparency",
    description: "Clear communication. Real timelines. No hidden costs. You remain informed at every phase.",
  },
  {
    icon: Home,
    title: "Respect for Property",
    description: "We treat your home as if it were our own. Clean worksites and protection for your belongings are mandatory.",
  },
  {
    icon: Ruler,
    title: "Precision Execution",
    description: "From framing to the final paint stroke, our craftsmanship is measured in millimeters, not inches.",
  },
  {
    icon: Clock,
    title: "Respected Timelines",
    description: "We respect your time. We set realistic schedules and work diligently to meet them without compromising quality.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term Support",
    description: "Our relationship doesn't end when the dust settles. We stand behind our work with solid guarantees.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const Commitments = () => {
  return (
    <section id="commitments" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              The IKEE<span className="italic text-neutral-500">a</span> Standard
            </h2>
            <p className="text-muted-foreground max-w-md">
              Our reputation is built on what we do when no one is watching.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border rounded-2xl overflow-hidden shadow-sm bg-neutral-200 border-border"
        >
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ backgroundColor: "hsl(var(--muted))" }}
              className="p-8 group transition-colors bg-card"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-muted text-foreground"
              >
                <commitment.icon className="w-5 h-5" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-lg font-medium tracking-tight mb-2">
                {commitment.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {commitment.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Commitments;
