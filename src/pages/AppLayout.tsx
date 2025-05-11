
import { useState } from "react";
import { Link, Outlet, useLocation, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, 
  Presentation, 
  LightbulbIcon, 
  LogOut, 
  MenuIcon, 
  X,
  Search,
  Bell,
  HelpCircle,
  Layout,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useAuth } from "@/contexts/AuthContext";

const AppLayout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, loading, logout } = useAuth();

  // Redirect if no user is logged in
  if (!loading && !currentUser) {
    return <Navigate to="/" />;
  }

  const navigation = [
    { 
      name: "Idea Validator", 
      href: "/app/validate", 
      icon: LightbulbIcon, 
      current: location.pathname === "/app/validate" || location.pathname === "/app", 
      badge: "Popular"
    },
    { 
      name: "Pitch Deck", 
      href: "/app/pitch-deck", 
      icon: Presentation, 
      current: location.pathname === "/app/pitch-deck",
      badge: null
    },
    { 
      name: "AI Co-founder", 
      href: "/app/ai-chat", 
      icon: BrainCircuit, 
      current: location.pathname === "/app/ai-chat",
      badge: "New" 
    },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="blob w-[800px] h-[800px] top-0 right-0 animate-blob-move opacity-5"></div>
        <div className="blob w-[700px] h-[700px] bottom-0 left-0 animate-blob-move animation-delay-2000 opacity-5"></div>
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
        
        <div className="fixed inset-y-0 left-0 z-40 w-72 overflow-y-auto bg-sidebar shadow-lg rounded-r-3xl py-6 px-4">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-xl font-semibold gradient-text">Founder Flow AI</h2>
          </div>
          
          <div className="px-4 mb-8">
            <div className="flex items-center mb-4">
              <Avatar className="h-10 w-10 border-2 border-primary/20">
                <AvatarImage src={currentUser?.photoURL || ""} />
                <AvatarFallback>{currentUser?.displayName?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="font-medium text-sm">{currentUser?.displayName || "User"}</p>
                <p className="text-xs text-muted-foreground">{currentUser?.email || ""}</p>
              </div>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10" />
            </div>
          </div>
          
          <nav className="flex flex-col gap-1 px-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between gap-3 px-4 py-3 text-base rounded-lg transition-colors ${
                  item.current 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </div>
                {item.badge && (
                  <Badge variant={item.badge === "New" ? "default" : "secondary"} className="text-[10px]">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto pt-8 px-4 space-y-3">
            <Link to="#" className="flex items-center gap-3 px-4 py-2 text-sm rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
              <HelpCircle className="h-4 w-4" />
              Help & Resources
            </Link>
            <Button 
              onClick={handleLogout}
              variant="ghost" 
              className="w-full flex items-center justify-start gap-3 px-4 py-2 text-sm rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:inset-y-0 z-50">
        <div className="bg-sidebar border-r border-sidebar-border h-full py-6 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between mb-8 px-6">
            <Link to="/app">
              <h2 className="text-xl font-semibold gradient-text">Founder Flow AI</h2>
            </Link>
          </div>
          
          <div className="px-4 mb-8">
            <div className="flex items-center mb-4">
              <Avatar className="h-10 w-10 border-2 border-primary/20">
                <AvatarImage src={currentUser?.photoURL || ""} />
                <AvatarFallback>{currentUser?.displayName?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="font-medium text-sm">{currentUser?.displayName || "User"}</p>
                <p className="text-xs text-muted-foreground">{currentUser?.email || ""}</p>
              </div>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10" />
            </div>
          </div>
          
          <nav className="flex flex-col gap-1 px-3 flex-1 overflow-y-auto">
            <div className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider px-4 mb-2">
              Main Tools
            </div>
            
            {navigation.map((item) => (
              <TooltipProvider key={item.name}>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <Link
                      to={item.href}
                      className={`flex items-center justify-between gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${
                        item.current 
                          ? "bg-primary/10 text-primary font-medium" 
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </div>
                      {item.badge && (
                        <Badge variant={item.badge === "New" ? "default" : "secondary"} className="text-[10px]">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
            
            <div className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider px-4 mb-2 mt-8">
              Resources
            </div>
            
            <Link to="#" className="flex items-center gap-3 px-4 py-2 text-sm rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
              <Layout className="h-4 w-4" />
              Templates
            </Link>
            
            <Link to="#" className="flex items-center gap-3 px-4 py-2 text-sm rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
              <HelpCircle className="h-4 w-4" />
              Help Center
            </Link>
          </nav>
          
          <div className="mt-auto border-t border-sidebar-border pt-4 px-4">
            <Button 
              onClick={handleLogout}
              variant="ghost" 
              className="w-full justify-start px-4 py-2 text-sm"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
      
      {/* Top navbar for larger screens */}
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border h-16 flex items-center px-4 lg:px-8">
          <div className="flex-1 lg:ml-72 flex justify-between items-center">
            <h1 className="text-xl font-semibold">
              {navigation.find(item => item.current)?.name || "Dashboard"}
            </h1>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-5 w-5" />
              </Button>
              
              <div className="hidden md:flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={currentUser?.photoURL || ""} />
                  <AvatarFallback>{currentUser?.displayName?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-xs">
                  <span className="font-medium">{currentUser?.displayName || "User"}</span>
                  <span className="text-muted-foreground">Free Plan</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Content area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 lg:ml-72">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
