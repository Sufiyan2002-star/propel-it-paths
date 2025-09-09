import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-poppins font-bold text-xl text-foreground">
            Anext Technology LLC
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-open-sans text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-open-sans text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="font-open-sans text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="font-open-sans text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Button asChild className="shadow-elegant">
              <Link to="/contact">Free Consultation</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-open-sans text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-open-sans text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="font-open-sans text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="font-open-sans text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="w-fit shadow-elegant">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Free Consultation
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;