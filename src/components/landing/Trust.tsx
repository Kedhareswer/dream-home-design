import { CheckCircle } from "lucide-react";

const Trust = () => {
  return (
    <section className="py-24 px-6 border-b bg-card border-border">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative bg-muted">
            <img
              src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2787&auto=format&fit=crop"
              alt="Construction Detail"
              className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 backdrop-blur px-4 py-2 rounded-md border bg-card/90 border-border">
              <p className="text-xs font-medium text-foreground">Dallas, Texas</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-foreground">
            A legacy of <span className="text-muted-foreground">honest work.</span>
          </h2>

          <div className="space-y-6 text-sm md:text-base leading-relaxed max-w-lg text-muted-foreground">
            <p>
              In an industry often plagued by uncertainty, Matos Home Improvements stands as a pillar of reliability. We believe that how we treat our clients is just as important as the quality of our construction.
            </p>
            <p>
              We are a Dallas-based company understanding the specific needs of local homeowners, property managers, and businesses. When you hire Matos, you hire peace of mind.
            </p>
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            {["Licensed", "Insured", "Bonded"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                <CheckCircle className="w-4 h-4" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
