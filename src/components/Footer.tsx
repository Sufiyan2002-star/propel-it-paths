import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div>
            <div className="font-poppins font-bold text-xl mb-4">
              Anext Technology LLC
            </div>
            <p className="font-open-sans text-primary-foreground/80 mb-4">
              Building Brighter Futures in Tech
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block font-open-sans text-primary-foreground/80 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block font-open-sans text-primary-foreground/80 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block font-open-sans text-primary-foreground/80 hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="block font-open-sans text-primary-foreground/80 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 font-open-sans text-primary-foreground/80">
                <Mail size={16} />
                <span>support@anextechnologyllc.com</span>
              </div>
              <div className="flex items-center space-x-3 font-open-sans text-primary-foreground/80">
                <Phone size={16} />
                <span>(512) 555-0198</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-open-sans text-primary-foreground/60">
            © 2025 Anext Technology LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;