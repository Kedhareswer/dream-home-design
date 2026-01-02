import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section id="contact" className="py-32 px-6 text-center bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-foreground">
          Ready to build something lasting?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
          Schedule a consultation with our team. We'll discuss your project, budget, and how we can bring your vision to life.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all placeholder:text-muted-foreground bg-card border-border"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full font-medium rounded-md px-4 py-3 text-sm transition-colors flex justify-center items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Request Consultation
          </motion.button>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xs text-center mt-4 text-muted-foreground"
          >
            No spam. No pressure. Just professional advice.
          </motion.p>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
