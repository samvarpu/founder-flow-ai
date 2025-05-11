
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BrainCircuit, 
  Send, 
  UserCircle, 
  Zap,
} from "lucide-react";

interface Message {
  role: "user" | "ai";
  content: string;
  timestamp: Date;
}

const AIChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content: "Hi there! I'm your AI Co-founder. What startup idea are you working on today?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const userMessage: Message = {
      role: "user",
      content: message,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      let aiResponse;
      
      if (message.toLowerCase().includes("monetize") || message.toLowerCase().includes("money")) {
        aiResponse = "Based on your idea, here are 3 potential monetization strategies:\n\n1. **Transaction Fee Model**: Charge a small percentage (3-5%) on each transaction between producers and consumers.\n\n2. **Subscription Tiers**: Offer free basic listings for producers, but charge monthly fees for premium features like analytics, featured placement, and marketing tools.\n\n3. **B2B Services**: Expand your platform to provide enterprise solutions for restaurants, grocers, and catering services who want to source locally at scale.";
      } else if (message.toLowerCase().includes("name") || message.toLowerCase().includes("brand")) {
        aiResponse = "Here are some potential brand names for your local food marketplace:\n\n- **HarvestLink** - Connects the concept of harvesting with linking producers and consumers\n- **LocalRoot** - Emphasizes local connections and agricultural roots\n- **FreshCircle** - Suggests the circular economy and freshness of products\n- **FarmDirect** - Simple, descriptive name that clearly communicates the value proposition\n- **ProducePulse** - Modern, dynamic name with alliteration";
      } else if (message.toLowerCase().includes("yc") || message.toLowerCase().includes("combinator")) {
        aiResponse = "If you were applying to Y Combinator, they'd likely ask you:\n\n1. What's your unfair advantage over potential competitors?\n2. How quickly can you reach $1M ARR with this model?\n3. Why are you the right founding team to execute this idea?\n4. What early signals show this could be a billion-dollar company?\n5. How will you acquire your first 100 producers and 1,000 consumers?";
      } else {
        aiResponse = "That's a great question about your food marketplace startup. To make this successful, I'd recommend focusing on:\n\n1. **Solving the chicken-and-egg problem** - You'll need both producers and consumers from day one. Consider starting in a single geographic area with pre-committed sellers.\n\n2. **Logistics solutions** - Many local producers don't have delivery capabilities. Partner with local delivery services or create a pickup hub system.\n\n3. **Quality control** - Establish clear standards and a review system to maintain trust in your marketplace.\n\nWould you like me to elaborate on any of these aspects?";
      }
      
      const aiMessage: Message = {
        role: "ai",
        content: aiResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const formatMessage = (content: string) => {
    // Simple markdown-like formatting
    return content
      .split('\n\n')
      .map((paragraph, i) => {
        // Bold text (between ** **)
        const formattedText = paragraph.replace(
          /\*\*(.*?)\*\*/g, 
          '<span class="font-bold">$1</span>'
        );
        
        return <p key={i} className="mb-3" dangerouslySetInnerHTML={{ __html: formattedText }} />;
      });
  };
  
  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">AI Co-founder Chat</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Brainstorm ideas, strategies, and get startup advice from your AI co-founder.
        </p>
      </div>
      
      {/* Chat Area */}
      <div className="flex flex-col h-[calc(100vh-240px)]">
        <Card className="glass-card border-0 flex-1 flex flex-col overflow-hidden">
          <CardContent className="pt-6 flex-1 overflow-y-auto pr-2">
            <div className="space-y-6">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-3/4 rounded-2xl p-4 ${
                      msg.role === "user" 
                        ? "bg-primary text-primary-foreground ml-12" 
                        : "bg-secondary mr-12"
                    }`}
                  >
                    <div className="flex items-center mb-2 gap-2">
                      {msg.role === "ai" ? (
                        <>
                          <BrainCircuit className="w-5 h-5" />
                          <span className="font-medium">AI Co-founder</span>
                        </>
                      ) : (
                        <>
                          <UserCircle className="w-5 h-5" />
                          <span className="font-medium">You</span>
                        </>
                      )}
                    </div>
                    <div>{formatMessage(msg.content)}</div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-2xl p-4 max-w-3/4 mr-12">
                    <div className="flex items-center mb-2">
                      <BrainCircuit className="w-5 h-5 mr-2" />
                      <span className="font-medium">AI Co-founder</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Ask a question..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="glass-input"
              />
              
              <Button 
                onClick={handleSendMessage} 
                disabled={!message.trim() || isTyping}
                className="shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex justify-center mt-3">
              <Button variant="ghost" size="sm" className="text-xs gap-1 text-muted-foreground">
                <Zap className="w-3 h-3" />
                Powered by Gemini
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AIChat;
