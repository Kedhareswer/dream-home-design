import { MapPin, Mail, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t pt-16 pb-8 px-6 bg-card border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-lg font-semibold tracking-widest uppercase block mb-6">
              Matos.
            </a>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Premium home remodeling services for Dallas, Texas. Built on integrity, transparency, and architectural quality.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Interior Remodeling
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Exterior Improvements
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  System Upgrades
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                Dallas, Texas
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                hello@matoshome.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                (214) 555-0123
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-border">
          <p className="text-xs text-muted-foreground">
            © 2024 Matos Home Improvements LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors text-muted-foreground hover:text-foreground">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="transition-colors text-muted-foreground hover:text-foreground">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
