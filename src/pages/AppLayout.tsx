
import { ReactNode, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, 
  Presentation, 
  LightbulbIcon, 
  LogOut, 
  MenuIcon, 
  User, 
  X,
  Search,
  Bell,
  Settings,
  HelpCircle,
  Layout,
  ChevronDown
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const AppLayout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { 
      name: "Profile", 
      href: "/app/profile", 
      icon: User, 
      current: location.pathname === "/app/profile",
      badge: null 
    },
  ];

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
                <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="font-medium text-sm">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
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
            <Link to="#" className="flex items-center gap-3 px-4 py-2 text-sm rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <Link to="/" className="flex items-center gap-3 px-4 py-2 text-sm rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
              <LogOut className="h-4 w-4" />
              Logout
            </Link>
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
                <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="font-medium text-sm">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start px-2">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
              
              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 pl-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start text-xs">
                        <span className="font-medium">John Doe</span>
                        <span className="text-muted-foreground">Free Plan</span>
                      </div>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User className="h-4 w-4 mr-2" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="h-4 w-4 mr-2" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <Link to="/">
                      <DropdownMenuItem>
                        <LogOut className="h-4 w-4 mr-2" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
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
