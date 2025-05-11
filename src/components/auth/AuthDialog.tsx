
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: "login" | "signup";
}

export function AuthDialog({ open, onOpenChange, defaultTab = "signup" }: AuthDialogProps) {
  const [tab, setTab] = useState<"login" | "signup">(defaultTab);
  const { signInWithGoogle } = useAuth();

  const handleGoogleAuth = () => {
    signInWithGoogle();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <DialogHeader className="bg-gradient-to-r from-primary/10 to-violet-500/10 p-6">
          <DialogTitle className="text-2xl font-bold gradient-text text-center">
            {tab === "login" ? "Welcome Back" : "Join Founder Flow AI"}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={tab} onValueChange={(value) => setTab(value as "login" | "signup")} className="w-full">
          <TabsList className="grid grid-cols-2 w-full rounded-none border-b h-14">
            <TabsTrigger 
              value="signup" 
              className="text-base font-medium data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full"
            >
              Sign Up
            </TabsTrigger>
            <TabsTrigger 
              value="login" 
              className="text-base font-medium data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full"
            >
              Login
            </TabsTrigger>
          </TabsList>
          
          {/* Signup Tab Content */}
          <TabsContent value="signup" className="p-8 space-y-6">
            <div className="text-center mb-6">
              <p className="text-muted-foreground">Create an account to get started</p>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full h-12 flex items-center justify-center gap-3"
              onClick={handleGoogleAuth}
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="h-5 w-5" />
              Sign up with Google
            </Button>
          </TabsContent>
          
          {/* Login Tab Content */}
          <TabsContent value="login" className="p-8 space-y-6">
            <div className="text-center mb-6">
              <p className="text-muted-foreground">Welcome back, sign in to continue</p>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full h-12 flex items-center justify-center gap-3"
              onClick={handleGoogleAuth}
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="h-5 w-5" />
              Sign in with Google
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
