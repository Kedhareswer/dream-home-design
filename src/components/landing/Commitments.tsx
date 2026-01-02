import { ShieldCheck, MessageSquare, Home, Ruler, Clock, HeartHandshake } from "lucide-react";

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

const Commitments = () => {
  return (
    <section id="commitments" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              The Matos Standard
            </h2>
            <p className="text-muted-foreground max-w-md">
              Our reputation is built on what we do when no one is watching.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border rounded-2xl overflow-hidden shadow-sm bg-neutral-200 border-border">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="p-8 group transition-colors bg-card hover:bg-muted"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-muted text-foreground">
                <commitment.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium tracking-tight mb-2">
                {commitment.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitments;
