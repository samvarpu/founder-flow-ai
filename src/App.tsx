
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import AppLayout from "./pages/AppLayout";
import IdeaValidator from "./pages/IdeaValidator";
import PitchDeck from "./pages/PitchDeck";
import AIChat from "./pages/AIChat";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="/app/validate" />} />
            <Route path="validate" element={<IdeaValidator />} />
            <Route path="pitch-deck" element={<PitchDeck />} />
            <Route path="ai-chat" element={<AIChat />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
