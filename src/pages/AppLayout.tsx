
import { ReactNode, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, 
  FilePresentation, 
  LightbulbIcon, 
  LogOut, 
  MenuIcon, 
  User, 
  X
} from "lucide-react";

const AppLayout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { 
      name: "Idea Validator", 
      href: "/app/validate", 
      icon: LightbulbIcon, 
      current: location.pathname === "/app/validate" || location.pathname === "/app" 
    },
    { 
      name: "Pitch Deck", 
      href: "/app/pitch-deck", 
      icon: FilePresentation, 
      current: location.pathname === "/app/pitch-deck" 
    },
    { 
      name: "AI Co-founder", 
      href: "/app/ai-chat", 
      icon: BrainCircuit, 
      current: location.pathname === "/app/ai-chat" 
    },
    { 
      name: "Profile", 
      href: "/app/profile", 
      icon: User, 
      current: location.pathname === "/app/profile" 
    },
  ];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="blob w-[600px] h-[600px] top-0 right-0 animate-blob-move opacity-10"></div>
        <div className="blob w-[500px] h-[500px] bottom-0 left-0 animate-blob-move animation-delay-2000 opacity-10"></div>
      </div>
      
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-50"
        >
          {mobileMenuOpen ? <X /> : <MenuIcon />}
        </Button>
      </div>
      
      {/* Mobile sidebar */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
        onClick={() => setMobileMenuOpen(false)} 
      >
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" aria-hidden="true" />
        
        <div className="fixed inset-y-0 left-0 z-40 w-72 overflow-y-auto glass-card rounded-r-3xl py-6 px-4">
          <div className="flex items-center justify-between mb-6 px-4">
            <h2 className="text-xl font-semibold gradient-text">Founder Flow AI</h2>
          </div>
          
          <nav className="flex flex-col gap-1 px-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-base rounded-lg transition-colors ${
                  item.current 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
            
            <Link to="/" className="flex items-center gap-3 px-4 py-3 text-base rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors mt-4">
              <LogOut className="h-5 w-5" />
              Logout
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:inset-y-0 z-50">
        <div className="glass-card h-full rounded-r-3xl py-6 px-4">
          <div className="flex items-center justify-between mb-6 px-4">
            <h2 className="text-xl font-semibold gradient-text">Founder Flow AI</h2>
          </div>
          
          <nav className="flex flex-col gap-1 px-2 flex-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 text-base rounded-lg transition-colors ${
                  item.current 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
            
            <Link to="/" className="flex items-center gap-3 px-4 py-3 text-base rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors mt-auto">
              <LogOut className="h-5 w-5" />
              Logout
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Content area */}
      <div className="flex-1 flex flex-col lg:pl-72">
        <main className="flex-1 overflow-y-auto pb-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
