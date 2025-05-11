
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, FileText, Lightbulb, Link as LinkIcon, LogOut, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "Jane Founder",
    email: "jane@gmail.com",
    joinedAt: new Date("2024-05-01"),
    stats: {
      validations: 3,
      pitchDecks: 2,
      lastLogin: new Date("2024-05-10")
    }
  };
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    }).format(date);
  };
  
  const handleLogout = () => {
    // This would normally connect to Firebase for logout
    window.location.href = "/";
  };
  
  return (
    <div className="container max-w-4xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
        <p className="text-muted-foreground">
          Manage your account and see your startup progress.
        </p>
      </div>
      
      <Card className="glass-card border-0 mb-8">
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>Your personal details and preferences</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="h-10 w-10 text-primary" />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-muted-foreground">{user.email}</p>
              <p className="text-sm mt-1">
                Joined on {formatDate(user.joinedAt)}
              </p>
            </div>
            
            <div className="md:ml-auto">
              <Button variant="outline" size="sm" className="gap-2">
                <Settings className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium mb-4">Your Activity</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-secondary/50 p-4 rounded-lg flex gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">{user.stats.validations}</div>
                  <div className="text-sm text-muted-foreground">Idea Validations</div>
                </div>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-lg flex gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">{user.stats.pitchDecks}</div>
                  <div className="text-sm text-muted-foreground">Pitch Decks</div>
                </div>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-lg flex gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Last Login</div>
                  <div className="text-sm text-muted-foreground">
                    {formatDate(user.stats.lastLogin)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-card border-0">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest work and progress</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-4">
            <div className="bg-secondary/50 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div className="font-medium">FarmConnect</div>
                <div className="text-xs text-muted-foreground">2 days ago</div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Validated idea connecting local food producers with consumers
              </p>
              <div className="flex gap-2">
                <Link to="/app/validate">
                  <Button variant="outline" size="sm" className="text-xs gap-1">
                    <Lightbulb className="w-3 h-3" />
                    View Validation
                  </Button>
                </Link>
                <Link to="/app/pitch-deck">
                  <Button variant="outline" size="sm" className="text-xs gap-1">
                    <LinkIcon className="w-3 h-3" />
                    Open Pitch Deck
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div className="font-medium">WorkspacePal</div>
                <div className="text-xs text-muted-foreground">1 week ago</div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Validated idea for office space sharing platform
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs gap-1">
                  <Lightbulb className="w-3 h-3" />
                  View Validation
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button onClick={handleLogout} variant="outline" className="gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
