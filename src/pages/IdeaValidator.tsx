
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, Download, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const IdeaValidator = () => {
  const [idea, setIdea] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<any>(null);

  const handleValidate = () => {
    if (!idea.trim()) return;
    
    setIsValidating(true);
    
    // Simulate API call to validate the idea
    setTimeout(() => {
      setValidationResult({
        marketTrends: {
          size: "$4.2B",
          growth: "14.3%",
          saturation: "Medium",
          trends: [
            "Growing consumer interest in local food supply chains",
            "Increasing focus on sustainable and transparent food sources",
            "Mobile app adoption for food services continues to grow"
          ]
        },
        competitors: [
          { name: "FarmDirect", strengths: "Strong rural network", weaknesses: "Limited urban presence" },
          { name: "UrbanHarvest", strengths: "Well-funded marketing", weaknesses: "Higher fees" },
          { name: "LocalEats", strengths: "Established brand", weaknesses: "Poor user experience" }
        ],
        swot: {
          strengths: ["Direct producer-consumer connection", "Reduced food miles", "Fresher products"],
          weaknesses: ["Requires critical mass of users", "Seasonal limitations", "Logistics challenges"],
          opportunities: ["Expand to catering businesses", "Add meal kit options", "Partnership with local restaurants"],
          threats: ["Large grocery chains adopting similar models", "Food delivery platforms", "Regulatory changes"]
        },
        nextSteps: [
          "Develop a minimum viable product (MVP) focusing on core features",
          "Test with a small group of producers and consumers in one location",
          "Gather feedback on user experience and value proposition"
        ]
      });
      
      setIsValidating(false);
    }, 2000);
  };

  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Idea Validator</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Describe your startup idea and get instant market analysis, competitor insights, and next steps.
        </p>
      </div>
      
      <Card className="glass-card border-0 mb-8">
        <CardContent className="pt-6">
          <div className="mb-4">
            <label htmlFor="idea" className="block text-sm font-medium mb-2">
              Describe your startup idea or pain point
            </label>
            <Textarea
              id="idea"
              placeholder="e.g., An app that connects local food producers with nearby consumers, making it easier to buy fresh produce directly from farms and small producers..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="glass-input min-h-32 text-base"
            />
          </div>
          
          <div className="flex justify-center">
            <Button 
              onClick={handleValidate}
              disabled={isValidating || !idea.trim()} 
              size="lg"
              className="px-8"
            >
              {isValidating ? (
                <>Validating...</>
              ) : (
                <>
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Validate Idea
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {validationResult && (
        <div className="space-y-8 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Validation Results</h2>
            <p className="text-muted-foreground">
              Here's what our AI analysis found about your startup idea.
            </p>
          </div>
          
          <Tabs defaultValue="market" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="market">Market Trends</TabsTrigger>
              <TabsTrigger value="competitors">Competitors</TabsTrigger>
              <TabsTrigger value="swot">SWOT Analysis</TabsTrigger>
              <TabsTrigger value="next">Next Steps</TabsTrigger>
            </TabsList>
            
            <TabsContent value="market" className="mt-0">
              <Card className="glass-card border-0">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Market Overview</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">Market Size</div>
                        <div className="text-2xl font-semibold">{validationResult.marketTrends.size}</div>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">Growth Rate</div>
                        <div className="text-2xl font-semibold">{validationResult.marketTrends.growth}</div>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">Market Saturation</div>
                        <div className="text-2xl font-semibold">{validationResult.marketTrends.saturation}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3">Key Market Trends</h4>
                    <ul className="space-y-2">
                      {validationResult.marketTrends.trends.map((trend: string, i: number) => (
                        <li key={i} className="flex gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{trend}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="competitors" className="mt-0">
              <Card className="glass-card border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Competitor Analysis</h3>
                  <div className="space-y-4">
                    {validationResult.competitors.map((competitor: any, i: number) => (
                      <div key={i} className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">{competitor.name}</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">Strengths</div>
                            <div>{competitor.strengths}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">Weaknesses</div>
                            <div>{competitor.weaknesses}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="swot" className="mt-0">
              <Card className="glass-card border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">SWOT Analysis</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Strengths</h4>
                      <ul className="space-y-2">
                        {validationResult.swot.strengths.map((item: string, i: number) => (
                          <li key={i} className="flex gap-2">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Weaknesses</h4>
                      <ul className="space-y-2">
                        {validationResult.swot.weaknesses.map((item: string, i: number) => (
                          <li key={i} className="flex gap-2">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Opportunities</h4>
                      <ul className="space-y-2">
                        {validationResult.swot.opportunities.map((item: string, i: number) => (
                          <li key={i} className="flex gap-2">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Threats</h4>
                      <ul className="space-y-2">
                        {validationResult.swot.threats.map((item: string, i: number) => (
                          <li key={i} className="flex gap-2">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="next" className="mt-0">
              <Card className="glass-card border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Recommended Next Steps</h3>
                  <ul className="space-y-3">
                    {validationResult.nextSteps.map((step: string, i: number) => (
                      <li key={i} className="flex gap-3 bg-primary/5 p-4 rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button variant="outline" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download Report
                    </Button>
                    
                    <Link to="/app/pitch-deck">
                      <Button className="gap-2">
                        Create Pitch Deck
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default IdeaValidator;
