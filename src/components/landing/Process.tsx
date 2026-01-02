import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation",
    description: "We meet to discuss your vision, budget, and timeline. We provide a clear, detailed estimate.",
  },
  {
    num: "02",
    title: "Planning",
    description: "Design, material selection, and permitting. We handle the paperwork so you don't have to.",
  },
  {
    num: "03",
    title: "Construction",
    description: "Our team executes with precision, maintaining a clean site and providing weekly updates.",
  },
  {
    num: "04",
    title: "Delivery",
    description: "Final walkthrough and handover. We ensure every detail meets the IKEE standard.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const Process = () => {
  return (
    <section id="process" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
              The Process
            </h2>
            <p className="text-primary-foreground/60">
              Stress-free execution from concept to completion.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            className="text-sm border-b pb-1 transition-colors border-primary-foreground/30 hover:border-primary-foreground"
          >
            Start your journey
          </motion.a>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="border-l pl-6 relative border-primary-foreground/20"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="font-mono text-xs mb-4 block text-primary-foreground/40"
              >
                {step.num}
              </motion.span>
              <h3 className="text-lg font-medium mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
