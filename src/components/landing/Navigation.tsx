import { Menu, ArrowRight } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-widest uppercase">
          Matos.
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#commitments" className="transition-colors hover:text-foreground">
            Philosophy
          </a>
          <a href="#services" className="transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#process" className="transition-colors hover:text-foreground">
            Process
          </a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors group bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Start Project
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>

        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 space-y-4">
          <a href="#commitments" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
            Philosophy
          </a>
          <a href="#services" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
            Services
          </a>
          <a href="#process" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
            Process
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide bg-primary text-primary-foreground"
          >
            Start Project
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
