
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

// Define form validation schemas
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginValues = z.infer<typeof loginSchema>;
type SignupValues = z.infer<typeof signupSchema>;

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: "login" | "signup";
}

export function AuthDialog({ open, onOpenChange, defaultTab = "signup" }: AuthDialogProps) {
  const [tab, setTab] = useState<"login" | "signup">(defaultTab);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Login form
  const loginForm = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Signup form
  const signupForm = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Handle login submission
  const onLoginSubmit = (data: LoginValues) => {
    // This would normally connect to authentication service
    console.log("Login data:", data);
    toast({
      title: "Welcome back!",
      description: "You have successfully logged in.",
    });
    
    // Simulate login success and redirect
    setTimeout(() => {
      onOpenChange(false);
      navigate("/app");
    }, 1000);
  };

  // Handle signup submission
  const onSignupSubmit = (data: SignupValues) => {
    // This would normally connect to authentication service
    console.log("Signup data:", data);
    toast({
      title: "Account created!",
      description: "Your account has been successfully created.",
    });
    
    // Simulate signup success and redirect
    setTimeout(() => {
      onOpenChange(false);
      navigate("/app");
    }, 1000);
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
          <TabsList className="grid grid-cols-2 w-full rounded-none border-b">
            <TabsTrigger value="signup" className="py-3">Sign Up</TabsTrigger>
            <TabsTrigger value="login" className="py-3">Login</TabsTrigger>
          </TabsList>
          
          {/* Signup Tab Content */}
          <TabsContent value="signup" className="p-6 space-y-4">
            <Form {...signupForm}>
              <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
                <FormField
                  control={signupForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="pl-10" 
                            {...field} 
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={signupForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <FormControl>
                          <Input 
                            placeholder="you@example.com" 
                            type="email" 
                            className="pl-10" 
                            {...field} 
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={signupForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <FormControl>
                          <Input 
                            placeholder="Create a password" 
                            type="password" 
                            className="pl-10" 
                            {...field} 
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full flex items-center gap-2">
                  Create Account <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </Form>
            
            <div className="text-center space-y-2">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
          </TabsContent>
          
          {/* Login Tab Content */}
          <TabsContent value="login" className="p-6 space-y-4">
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <FormControl>
                          <Input 
                            placeholder="you@example.com" 
                            type="email" 
                            className="pl-10" 
                            {...field} 
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <FormControl>
                          <Input 
                            placeholder="Enter your password" 
                            type="password" 
                            className="pl-10" 
                            {...field} 
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full flex items-center gap-2">
                  Sign In <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </Form>
            
            <div className="text-center space-y-2">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
