
import { Card } from "@/components/ui/card";

const HeroImage = () => {
  return (
    <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-10"></div>
      
      <div className="bg-slate-50 dark:bg-slate-900 aspect-[16/9] w-full overflow-hidden">
        <div className="p-4 md:p-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-muted-foreground">Founder Flow AI</div>
            </div>
            
            {/* App UI Mockup */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-medium mb-2">Idea Validator</h3>
                <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-md mb-3">
                  <p className="text-sm text-muted-foreground">An app that connects local food producers with nearby consumers...</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-slate-100 dark:bg-slate-700 h-8 rounded animate-pulse"></div>
                  <div className="bg-slate-100 dark:bg-slate-700 h-24 rounded animate-pulse"></div>
                  <div className="bg-slate-100 dark:bg-slate-700 h-12 rounded animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-medium mb-2">Market Analysis</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Market Size</span>
                    <span className="text-sm font-medium">$4.2B</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm">Growth Rate</span>
                    <span className="text-sm font-medium">+14.3%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-1/2"></div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm">Competition</span>
                    <span className="text-sm font-medium">Medium</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-2/5"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-medium mb-2">AI Co-founder</h3>
                <div className="space-y-3">
                  <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg text-sm">
                    How should I approach funding?
                  </div>
                  <div className="bg-primary/10 p-2 rounded-lg text-sm">
                    Based on your idea, I recommend starting with a small seed round...
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg text-xs flex-1">
                      Monetization?
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg text-xs flex-1">
                      YC application?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
