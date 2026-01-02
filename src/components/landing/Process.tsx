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
    description: "Final walkthrough and handover. We ensure every detail meets the Matos Standard.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
              The Process
            </h2>
            <p className="text-primary-foreground/60">
              Stress-free execution from concept to completion.
            </p>
          </div>
          <a
            href="#contact"
            className="text-sm border-b pb-1 transition-colors border-primary-foreground/30 hover:border-primary-foreground"
          >
            Start your journey
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="border-l pl-6 relative border-primary-foreground/20">
              <span className="font-mono text-xs mb-4 block text-primary-foreground/40">
                {step.num}
              </span>
              <h3 className="text-lg font-medium mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
