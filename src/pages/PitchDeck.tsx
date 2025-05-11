
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Eye,
  FileText,
  Pencil,
  Plus
} from "lucide-react";
import { Link } from "react-router-dom";

const PitchDeck = () => {
  const [activeTab, setActiveTab] = useState("edit");
  const [startupName, setStartupName] = useState("FarmConnect");
  const [problem, setProblem] = useState("Small local farms struggle to reach consumers directly, while consumers lack easy access to fresh local produce.");
  const [solution, setSolution] = useState("A mobile platform connecting local food producers directly with nearby consumers, eliminating middlemen and reducing food miles.");
  const [marketSize, setMarketSize] = useState("The direct-to-consumer food market is valued at $4.2B with 14.3% annual growth.");
  const [businessModel, setBusinessModel] = useState("5% commission on transactions, premium subscriptions for producers, and featured listings.");
  const [ask, setAsk] = useState("Seeking $500K in seed funding to develop the MVP, build initial producer network, and launch in two test markets.");
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { title: "Cover", content: startupName },
    { title: "Problem", content: problem },
    { title: "Solution", content: solution },
    { title: "Market Size", content: marketSize },
    { title: "Business Model", content: businessModel },
    { title: "Ask", content: ask }
  ];
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Pitch Deck Generator</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Create a beautiful, investor-ready pitch deck for your startup idea.
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="edit" className="gap-2">
            <Pencil className="w-4 h-4" />
            Edit Content
          </TabsTrigger>
          <TabsTrigger value="preview" className="gap-2">
            <Eye className="w-4 h-4" />
            Preview Slides
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="edit" className="mt-0 space-y-8">
          <Card className="glass-card border-0">
            <CardContent className="pt-6">
              <div className="mb-6">
                <label htmlFor="startup-name" className="block text-sm font-medium mb-2">
                  Startup Name
                </label>
                <Input
                  id="startup-name"
                  value={startupName}
                  onChange={(e) => setStartupName(e.target.value)}
                  className="glass-input"
                  placeholder="e.g., FarmConnect"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="problem" className="block text-sm font-medium mb-2">
                  Problem
                </label>
                <Textarea
                  id="problem"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  className="glass-input min-h-24"
                  placeholder="What problem are you solving?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="solution" className="block text-sm font-medium mb-2">
                  Solution
                </label>
                <Textarea
                  id="solution"
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                  className="glass-input min-h-24"
                  placeholder="How does your product/service solve this problem?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="market-size" className="block text-sm font-medium mb-2">
                  Market Size
                </label>
                <Textarea
                  id="market-size"
                  value={marketSize}
                  onChange={(e) => setMarketSize(e.target.value)}
                  className="glass-input min-h-24"
                  placeholder="What is your total addressable market?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="business-model" className="block text-sm font-medium mb-2">
                  Business Model
                </label>
                <Textarea
                  id="business-model"
                  value={businessModel}
                  onChange={(e) => setBusinessModel(e.target.value)}
                  className="glass-input min-h-24"
                  placeholder="How will your business make money?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="ask" className="block text-sm font-medium mb-2">
                  Ask
                </label>
                <Textarea
                  id="ask"
                  value={ask}
                  onChange={(e) => setAsk(e.target.value)}
                  className="glass-input min-h-24"
                  placeholder="What are you asking from investors?"
                />
              </div>
              
              <Button className="w-full flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add New Slide
              </Button>
            </CardContent>
          </Card>
          
          <div className="flex justify-center">
            <Button onClick={() => setActiveTab("preview")} size="lg">
              Preview Deck
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="preview" className="mt-0">
          <Card className="glass-card border-0 mb-8">
            <CardContent className="pt-6 pb-6">
              {/* Slide Content */}
              <div className="aspect-[16/9] bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-lg mb-6 relative">
                {currentSlide === 0 && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                    <div className="text-4xl font-bold mb-4 gradient-text">{startupName}</div>
                    <div className="text-lg text-muted-foreground">Pitch Deck</div>
                  </div>
                )}
                
                {currentSlide === 1 && (
                  <div className="absolute inset-0 flex flex-col p-8">
                    <h2 className="text-2xl font-bold mb-6">Problem</h2>
                    <div className="text-lg">{problem}</div>
                  </div>
                )}
                
                {currentSlide === 2 && (
                  <div className="absolute inset-0 flex flex-col p-8">
                    <h2 className="text-2xl font-bold mb-6">Solution</h2>
                    <div className="text-lg">{solution}</div>
                  </div>
                )}
                
                {currentSlide === 3 && (
                  <div className="absolute inset-0 flex flex-col p-8">
                    <h2 className="text-2xl font-bold mb-6">Market Size</h2>
                    <div className="text-lg">{marketSize}</div>
                  </div>
                )}
                
                {currentSlide === 4 && (
                  <div className="absolute inset-0 flex flex-col p-8">
                    <h2 className="text-2xl font-bold mb-6">Business Model</h2>
                    <div className="text-lg">{businessModel}</div>
                  </div>
                )}
                
                {currentSlide === 5 && (
                  <div className="absolute inset-0 flex flex-col p-8">
                    <h2 className="text-2xl font-bold mb-6">Ask</h2>
                    <div className="text-lg">{ask}</div>
                  </div>
                )}
              </div>
              
              {/* Slide Navigation */}
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Slide {currentSlide + 1} of {slides.length}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Thumbnail Navigation */}
          <div className="flex overflow-x-auto pb-4 gap-3 mb-8">
            {slides.map((slide, index) => (
              <div 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`cursor-pointer flex-shrink-0 w-32 aspect-[16/9] rounded-md overflow-hidden border-2 ${
                  currentSlide === index ? "border-primary" : "border-transparent"
                }`}
              >
                <div className="w-full h-full bg-white dark:bg-slate-900 flex flex-col justify-center items-center p-2 text-center">
                  <div className="text-xs font-medium mb-1">{slide.title}</div>
                  <div className="text-[8px] text-muted-foreground line-clamp-2">
                    {slide.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={() => setActiveTab("edit")} className="gap-2">
              <Pencil className="w-4 h-4" />
              Edit Content
            </Button>
            
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Share Link
            </Button>
            
            <Button className="gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PitchDeck;
