import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const VisualBreak = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className="w-full h-96 md:h-[600px] relative overflow-hidden bg-neutral-200">
      <motion.img
        style={{ y }}
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2700&auto=format&fit=crop"
        alt="Minimalist Interior"
        className="w-full h-[120%] object-cover grayscale opacity-90"
      />
      <div className="absolute inset-0 bg-primary/10" />
    </div>
  );
};

export default VisualBreak;
