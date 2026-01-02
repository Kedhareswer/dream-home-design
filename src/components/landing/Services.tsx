import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    num: "01",
    title: "Interior Transformations",
    description: "Complete remodels of kitchens, bathrooms, and living spaces. We handle structural changes, high-end finishes, and lighting design to modernize your interior environment.",
    features: ["Kitchens & Baths", "Flooring & Tile", "Custom Cabinetry"],
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2160&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Exterior Improvements",
    description: "Enhancing curb appeal and structural integrity. From siding and roofing to custom patios and outdoor living areas that withstand the Texas climate.",
    features: ["Siding & Roofing", "Patios & Decks", "Window Replacement"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2160&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Design & Systems",
    description: "The unseen backbone of your home. We manage architectural planning, permitting, and the modernization of electrical, plumbing, and HVAC systems.",
    features: ["3D Rendering", "Electrical & Plumbing", "Permitting"],
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2160&auto=format&fit=crop",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="border-t py-24 px-6 bg-card border-border" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest text-muted-foreground uppercase block mb-20"
        >
          Expertise
        </motion.span>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
          {/* Left Column: Sticky Images (Desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 lg:sticky lg:top-32 h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm order-2 lg:order-1 hidden lg:block bg-muted"
          >
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-20 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Accordion List */}
          <div className="w-full lg:w-7/12 flex flex-col order-1 lg:order-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b py-8 cursor-pointer border-border"
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-start gap-6 md:gap-12">
                  <motion.span
                    animate={{ 
                      color: activeIndex === index ? "hsl(var(--foreground))" : "hsl(var(--neutral-400))" 
                    }}
                    className="text-xl font-mono transition-colors pt-2"
                  >
                    {service.num}
                  </motion.span>

                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start w-full">
                      <motion.h3
                        animate={{ 
                          color: activeIndex === index ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" 
                        }}
                        className="text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4"
                      >
                        {service.title}
                      </motion.h3>

                      <motion.div
                        animate={{ 
                          backgroundColor: activeIndex === index ? "hsl(var(--primary))" : "transparent",
                          borderColor: activeIndex === index ? "hsl(var(--primary))" : "hsl(var(--border))",
                          color: activeIndex === index ? "hsl(var(--primary-foreground))" : "hsl(var(--neutral-400))"
                        }}
                        className="w-10 h-10 rounded-full border flex items-center justify-center transition-all ml-4 shrink-0"
                      >
                        <motion.div
                          animate={{ rotate: activeIndex === index ? 0 : -45 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-4">
                            {/* Mobile Image */}
                            <div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-muted">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            </div>

                            <p className="text-muted-foreground leading-relaxed max-w-lg mb-6 text-base">
                              {service.description}
                            </p>

                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <motion.li 
                                  key={idx} 
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-center gap-3 text-sm text-muted-foreground"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                                  {feature}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
