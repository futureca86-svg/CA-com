import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { FileCheck, FileQuestion, Calendar, LayoutDashboard, TrendingUp, Zap, Mail, GraduationCap, BookOpen, Target } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
const Index = () => {
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  const features = [{
    icon: FileCheck,
    title: "ICAI-Style Evaluation",
    description: "Get professional evaluation with concept clarity, working accuracy & presentation feedback."
  }, {
    icon: Target,
    title: "Step-wise Marking",
    description: "Receive marks broken down by criteria - just like ICAI examiners grade your papers."
  }, {
    icon: TrendingUp,
    title: "Topic Strength Analysis",
    description: "Know which topics are Strong, Moderate or at Risk based on your performance."
  }, {
    icon: BookOpen,
    title: "Improvement Suggestions",
    description: "Actionable feedback on how ICAI expects answers to be structured."
  }, {
    icon: FileQuestion,
    title: "AI Test Generator",
    description: "Generate practice tests with model answers and downloadable PDFs."
  }, {
    icon: Calendar,
    title: "Smart Study Planner",
    description: "AI-powered study schedules based on your subjects, time, and goals."
  }];
  return <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="font-heading font-bold text-xl">CA Companion </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <SocialLinks variant="header" />
            {user ? <Button onClick={() => navigate("/dashboard")} className="bg-gradient-primary">
                Go to Dashboard
              </Button> : <Button onClick={() => navigate("/auth")} variant="outline">
                Sign In
              </Button>}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center border-dashed border-secondary-foreground">
            <div className="animate-slide-up">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 font-extrabold text-secondary-foreground">
                CA Companion{" "}
                <span className="text-destructive font-serif text-centre bg-secondary text-5xl text-center font-extrabold">Smart Study.
Accurate Evaluation.
Better Results.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">ICAI-pattern answer evaluation with step-wise marking, detailed feedback & improvement suggestions. Built specifically for CA Foundation, Inter & CA Final students.</p>
              <div className="flex flex-wrap gap-4">
                {user ? <Button size="lg" onClick={() => navigate("/dashboard")} className="bg-gradient-primary hover:opacity-90 transition-all">
                    <LayoutDashboard className="w-5 h-5 mr-2" />
                    Open Dashboard
                  </Button> : <>
                    <Button size="lg" onClick={() => navigate("/auth")} className="bg-gradient-primary hover:opacity-90 transition-all">
                      Get Started Free
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => navigate("/auth")}>
                      Sign In
                    </Button>
                  </>}
              </div>
            </div>
            
            <div className="relative animate-fade-in animation-delay-200">
              <div className="relative z-10">
                <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <BookOpen className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Study Smarter</h3>
                      <p className="text-muted-foreground text-sm">AI-powered learning</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                      <Target className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Professionally evaluation</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                      <FileQuestion className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Generate practice tests</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Smart study schedules</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              AI Evaluation <span className="text-secondary-foreground bg-primary-foreground">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional answer evaluation that mirrors ICAI examination standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300 animate-fade-in border-border/50" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-gradient-primary text-primary-foreground text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Get Your Answers Evaluated Now
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Experience ICAI-style evaluation and know exactly where you stand before the exam.</p>
            {!user && <Button size="lg" variant="secondary" onClick={() => navigate("/auth")} className="font-semibold">
                Start Free Evaluation
              </Button>}
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary/50 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="font-heading font-bold text-base">CA Companion 
            </span>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">Follow Us</span>
              <div className="flex items-center gap-4">
                <a href="mailto:contact@cacompanion.com" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 p-1.5 rounded-full hover:bg-background/50" title="Email Us">
                  <Mail className="w-5 h-5" />
                </a>
                <SocialLinks variant="footer" />
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} CA Companion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;