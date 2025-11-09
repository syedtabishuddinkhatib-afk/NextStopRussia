import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import Universities from "@/pages/Universities";
import UniversityDetail from "@/pages/UniversityDetail";
import Programs from "@/pages/Programs";
import AdmissionProcess from "@/pages/AdmissionProcess";
import RequiredDocuments from "@/pages/RequiredDocuments";
import VerifyAuthorization from "@/pages/VerifyAuthorization";
import Verify from "@/pages/Verify";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/universities" component={Universities} />
      <Route path="/universities/:id" component={UniversityDetail} />
      <Route path="/programs" component={Programs} />
      <Route path="/admission-process" component={AdmissionProcess} />
      <Route path="/required-documents" component={RequiredDocuments} />
      <Route path="/verify-authorization" component={VerifyAuthorization} />
      <Route path="/verify/:id" component={Verify} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
