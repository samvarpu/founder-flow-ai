
import { Check, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card className="glass-card overflow-hidden border-0">
      <CardHeader className="pb-3">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {icon === "Check" ? (
            <Check className="h-6 w-6 text-primary" />
          ) : (
            <Sparkles className="h-6 w-6 text-primary" />
          )}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
