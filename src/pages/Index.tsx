
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImage from "../components/landing/HeroImage";
import FeatureCard from "../components/landing/FeatureCard";
import { Motion } from "../components/ui/motion";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const features = [
    {
      title: "Validate Ideas Instantly",
      description: "Get market analysis, competitor insights, and SWOT analysis for your startup concept.",
      icon: "Check"
    },
    {
      title: "Generate Pitch Decks",
      description: "Create beautiful, investor-ready presentations with just a few clicks.",
      icon: "Sparkles"
    },
    {
      title: "AI Co-founder Chat",
      description: "Brainstorm strategies, names, and marketing plans with your AI co-founder.",
      icon: "Sparkles"
    }
  ];

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    // This would normally connect to Firebase
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/app";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="blob w-[500px] h-[500px] top-0 left-0 animate-blob-move opacity-30"></div>
        <div className="blob w-[600px] h-[600px] bottom-0 right-0 animate-blob-move animation-delay-2000 opacity-30"></div>
        <div className="blob w-[300px] h-[300px] bottom-1/4 left-1/4 animate-blob-move animation-delay-4000 opacity-20"></div>
      </div>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 pt-20 pb-32 md:pt-32 md:pb-40 text-center">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Founder Flow AI
          </span>
        </Motion>
        
        <Motion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 max-w-4xl">
            Start, Validate & Pitch Your Startup — <span className="gradient-text">with AI.</span>
          </h1>
        </Motion>
        
        <Motion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-8 max-w-2xl"
        >
          <p className="text-xl text-muted-foreground">
            The all-in-one platform for first-time founders to validate ideas, create pitch decks, and brainstorm with an AI co-founder.
          </p>
        </Motion>
        
        <Motion
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            size="lg" 
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="text-lg px-8 h-14 space-x-2 bg-primary hover:bg-primary/90"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <Link to="/app">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 h-14 border-2"
            >
              See Demo
            </Button>
          </Link>
        </Motion>
        
        <Motion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-3 text-sm text-muted-foreground"
        >
          No credit card required · No pricing · Just start for free
        </Motion>
      </section>
      
      {/* Hero Image */}
      <Motion
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mx-auto -mt-16 md:-mt-28 px-4 max-w-6xl w-full"
      >
        <HeroImage />
      </Motion>
      
      {/* Features Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed for simplicity. Built for first-time founders with no technical or business experience required.
            </p>
          </Motion>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Motion
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </Motion>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="glass-card py-16 px-4 my-20 mx-4 md:mx-auto max-w-5xl">
        <div className="text-center">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Made For First-Time Founders</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              No code. No experience. No problem.
            </p>
            
            <Button 
              size="lg" 
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="text-lg px-8 h-14"
            >
              Start Building Now
            </Button>
          </Motion>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Founder Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tips and strategies to help you succeed on your startup journey.
            </p>
          </Motion>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-semibold mb-2">What Makes a Great Startup Idea in 2025?</h3>
            <p className="text-muted-foreground mb-4">Learn the key characteristics of successful startup ideas in today's market.</p>
            <Link to="#" className="text-primary hover:underline inline-flex items-center">
              Read More <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </Motion>
          
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-semibold mb-2">3 Slides Every Pitch Deck Must Have</h3>
            <p className="text-muted-foreground mb-4">Master the essential components that investors look for in winning pitch decks.</p>
            <Link to="#" className="text-primary hover:underline inline-flex items-center">
              Read More <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </Motion>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-auto py-12 px-4 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold gradient-text">Founder Flow AI</p>
            <p className="text-muted-foreground mt-1">© 2025. All rights reserved.</p>
          </div>
          
          <div className="flex gap-8">
            <Link to="#" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">Contact</Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">Terms</Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
