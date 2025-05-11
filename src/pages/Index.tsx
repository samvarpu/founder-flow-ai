
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImage from "../components/landing/HeroImage";
import FeatureCard from "../components/landing/FeatureCard";
import { Motion } from "../components/ui/motion";
import Navbar from "../components/landing/Navbar";
import Testimonial from "../components/landing/Testimonial";

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
      
      {/* Navbar */}
      <Navbar />
      
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
      
      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Founders Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of founders who have launched their startups with Founder Flow AI.
              </p>
            </Motion>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial 
              quote="Founder Flow AI helped me validate my SaaS idea and create a pitch deck that landed me my first investor meeting."
              author="Sarah Chen"
              role="Founder, DataSync"
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
            />
            <Testimonial 
              quote="The AI co-founder was like having an experienced mentor available 24/7. It helped me refine my business model in ways I hadn't considered."
              author="Marcus Johnson"
              role="CEO, RetailAI"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2000"
            alt="Startup workspace" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
        </div>
      
        <div className="max-w-5xl mx-auto glass-card py-16 px-8 text-center relative z-10">
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
            className="glass-card p-6 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600" 
                alt="Startup idea" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
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
            className="glass-card p-6 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
                alt="Pitch deck" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
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
