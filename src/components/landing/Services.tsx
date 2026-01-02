import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    num: "01",
    title: "Interior Transformations",
    description: "Complete remodels of kitchens, bathrooms, and living spaces. We handle structural changes, high-end finishes, and lighting design to modernize your interior environment.",
    features: ["Kitchens & Baths", "Flooring & Tile", "Custom Cabinetry"],
    image: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80",
  },
  {
    num: "02",
    title: "Exterior Improvements",
    description: "Enhancing curb appeal and structural integrity. From siding and roofing to custom patios and outdoor living areas that withstand the Texas climate.",
    features: ["Siding & Roofing", "Patios & Decks", "Window Replacement"],
    image: "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80",
  },
  {
    num: "03",
    title: "Design & Systems",
    description: "The unseen backbone of your home. We manage architectural planning, permitting, and the modernization of electrical, plumbing, and HVAC systems.",
    features: ["3D Rendering", "Electrical & Plumbing", "Permitting"],
    image: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="border-t py-24 px-6 bg-card border-border" id="services">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase block mb-20">
          Expertise
        </span>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
          {/* Left Column: Sticky Images (Desktop) */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm order-2 lg:order-1 hidden lg:block bg-muted">
            <div className="relative w-full h-full">
              {services.map((service, index) => (
                <img
                  key={index}
                  src={service.image}
                  alt={service.title}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out",
                    activeIndex === index ? "opacity-100 z-10" : "opacity-0"
                  )}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-20 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="w-full lg:w-7/12 flex flex-col order-1 lg:order-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b py-8 cursor-pointer border-border"
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-start gap-6 md:gap-12">
                  <span
                    className={cn(
                      "text-xl font-mono transition-colors pt-2",
                      activeIndex === index ? "text-foreground" : "text-neutral-400"
                    )}
                  >
                    {service.num}
                  </span>

                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start w-full">
                      <h3
                        className={cn(
                          "text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4",
                          activeIndex === index ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {service.title}
                      </h3>

                      <div
                        className={cn(
                          "w-10 h-10 rounded-full border flex items-center justify-center transition-all ml-4 shrink-0",
                          activeIndex === index
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-transparent text-neutral-400"
                        )}
                      >
                        <ArrowRight
                          className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            activeIndex === index ? "rotate-0" : "-rotate-45"
                          )}
                        />
                      </div>
                    </div>

                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-500 ease-out",
                        activeIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={cn(
                            "transition-opacity duration-500 delay-100",
                            activeIndex === index ? "pt-2 pb-4 opacity-100" : "pt-0 pb-0 opacity-0"
                          )}
                        >
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
                              <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
