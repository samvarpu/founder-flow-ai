
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4
        ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold gradient-text">Founder Flow AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="#features" className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">
            Features
          </Link>
          <Link to="#testimonials" className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">
            Testimonials
          </Link>
          <Link to="#pricing" className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">
            Pricing
          </Link>
          <Link to="#blog" className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">
            Blog
          </Link>
          <Link to="/app">
            <Button variant="outline" size="sm" className="ml-4">
              Login
            </Button>
          </Link>
          <Link to="/app">
            <Button size="sm" className="ml-2 flex items-center space-x-1">
              <span>Get Started</span>
              <ArrowRight size={14} />
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl shadow-lg p-4 border-t">
          <nav className="flex flex-col space-y-4 py-4">
            <Link 
              to="#features" 
              className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="#testimonials" 
              className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="#pricing" 
              className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="#blog" 
              className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link to="/app" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/app" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
