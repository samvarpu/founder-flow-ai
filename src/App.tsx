
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import IdeaValidator from "./pages/IdeaValidator";
import PitchDeck from "./pages/PitchDeck";
import AIChat from "./pages/AIChat";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="/app/validate" replace />} />
            <Route path="validate" element={<IdeaValidator />} />
            <Route path="pitch-deck" element={<PitchDeck />} />
            <Route path="ai-chat" element={<AIChat />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
