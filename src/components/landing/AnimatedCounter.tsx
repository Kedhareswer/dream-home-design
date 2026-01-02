import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ value, suffix = "", duration = 2 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0
  });
  
  const display = useTransform(spring, (current) => 
    Math.floor(current)
  );

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [display]);

  return (
    <motion.span
      ref={ref}
      className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800 inline-block cursor-default"
      whileHover={{ 
        scale: 1.1,
        color: "hsl(var(--primary))",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {displayValue}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
