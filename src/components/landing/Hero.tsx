import { ChevronUp, ChevronDown, ArrowDown, Instagram, Facebook, Send } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative pt-24 pb-12 lg:pt-32 lg:pb-12 overflow-hidden bg-card">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-10 lg:gap-14">
            {/* Title Block */}
            <div className="space-y-2 lg:space-y-4">
              <h1 className="font-oswald text-6xl md:text-7xl lg:text-[7rem] font-medium leading-[0.9] tracking-tighter uppercase text-foreground">
                Your Ideal Home
              </h1>
              <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
                <div className="h-14 md:h-20 w-32 md:w-56 rounded-full overflow-hidden relative shrink-0 border shadow-sm border-border">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-27b90452ec39?q=80&w=600&auto=format&fit=crop"
                    alt="Modern Home Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="font-oswald text-6xl md:text-7xl lg:text-[7rem] font-medium leading-[0.9] tracking-tighter uppercase text-foreground">
                  — A Reality
                </h1>
              </div>
            </div>

            {/* Subtext & CTA */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12 mt-2">
              <p className="text-muted-foreground text-base md:text-lg max-w-sm font-light leading-relaxed">
                We will help you choose a property that combines modern style, impeccable comfort, and the highest investment appeal.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-14 px-10 rounded-full text-sm font-medium tracking-wider uppercase transition-all shrink-0 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20"
              >
                Find Your Home
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-4">
              <div className="flex items-center gap-3">
                <span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">500+</span>
                <span className="text-xs text-muted-foreground leading-tight max-w-[80px] font-medium">
                  Families found a home
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">200+</span>
                <span className="text-xs text-muted-foreground leading-tight max-w-[80px] font-medium">
                  Homes sold across Dallas
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">95%</span>
                <span className="text-xs text-muted-foreground leading-tight max-w-[80px] font-medium">
                  Clients return
                </span>
              </div>
            </div>

            {/* Bottom Left Image (Desktop Only) */}
            <div className="hidden md:block relative h-64 w-full rounded-[2rem] overflow-hidden mt-auto group shadow-sm border border-border">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                alt="Modern Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute right-6 bottom-6 flex flex-col gap-2 z-10">
                <button className="w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center transition-colors shadow-sm bg-card/90 border-border hover:bg-card text-foreground">
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center transition-colors shadow-sm bg-card/90 border-border hover:bg-card text-foreground">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Large Feature Image */}
          <div className="lg:col-span-5 relative h-[600px] lg:h-auto min-h-[600px] rounded-[2rem] overflow-hidden shadow-xl group bg-muted">
            <img
              src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Villa"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Social Icons */}
            <div className="absolute top-6 right-6 flex gap-3 z-20">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-card hover:bg-muted text-foreground">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-card hover:bg-muted text-foreground">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-card hover:bg-muted text-foreground">
                <Send className="w-4 h-4" />
              </a>
            </div>

            {/* Floating Info Card */}
            <div className="absolute top-6 left-6 max-w-[220px] rounded-2xl p-3 shadow-xl z-20 bg-card">
              <div className="h-24 rounded-xl overflow-hidden mb-3 relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop"
                  alt="Property Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] font-medium mb-3 leading-snug text-muted-foreground">
                Within 7 days, we will find a property that fully matches your budget and preferences.
              </p>
              <button className="w-8 h-8 rounded-full flex items-center justify-center ml-auto transition-colors bg-primary text-primary-foreground hover:bg-primary/90">
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 z-20">
              <p className="text-sm max-w-xs font-light leading-relaxed drop-shadow-sm text-white/90">
                With us, buying a home becomes simple, safe, and enjoyable, as we guide you through every step — from selecting the property to completing the paperwork.
              </p>
              <button className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-lg bg-white text-foreground hover:bg-neutral-100">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
