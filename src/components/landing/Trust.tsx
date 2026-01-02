import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Trust = () => {
  return (
    <section className="py-24 px-6 border-b bg-card border-border">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2"
        >
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative bg-muted group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2787&auto=format&fit=crop"
              alt="Construction Detail"
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-6 left-6 backdrop-blur px-4 py-2 rounded-md border bg-card/90 border-border"
            >
              <p className="text-xs font-medium text-foreground">Dallas, Texas</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-foreground">
            A legacy of <span className="text-muted-foreground">honest work.</span>
          </h2>

          <div className="space-y-6 text-sm md:text-base leading-relaxed max-w-lg text-muted-foreground">
            <p>
              In an industry often plagued by uncertainty, IKEE<span className="italic text-neutral-500">a</span> Home Improvements stands as a pillar of reliability. We believe that how we treat our clients is just as important as the quality of our construction.
            </p>
            <p>
              We are a Dallas-based company understanding the specific needs of local homeowners, property managers, and businesses. When you hire IKEE<span className="italic text-neutral-500">a</span>, you hire peace of mind.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex gap-4 flex-wrap"
          >
            {["Licensed", "Insured", "Bonded"].map((badge, index) => (
              <motion.div 
                key={badge} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground"
              >
                <CheckCircle className="w-4 h-4" />
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
