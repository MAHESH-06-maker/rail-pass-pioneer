import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Shield, Clock, CheckCircle, Train, GraduationCap, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import railwayHero from "@/assets/railway-hero.jpg";
import digitalProcess from "@/assets/digital-process.jpg";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Train className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-primary">RailConcession</h2>
              <p className="text-xs text-muted-foreground">Digital Railway Pass System</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/login" className="text-foreground hover:text-primary transition-colors">
              Login
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={railwayHero} 
            alt="Modern railway station" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital Railway
              <span className="text-primary block">Concession System</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Streamlined, paperless railway pass management for students and colleges. 
              Apply, approve, and manage railway concessions digitally with our secure platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/login/student">
                <Button size="lg" className="btn-hero w-full sm:w-auto">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Login as Student
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/login/admin">
                <Button variant="outline" size="lg" className="btn-outline-success w-full sm:w-auto">
                  <Shield className="w-5 h-5 mr-2" />
                  College Admin Login
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>100% Digital Process</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Instant Approvals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Secure & Verified</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-up lg:block hidden">
            <div className="relative">
              <img 
                src={dashboardMockup} 
                alt="Dashboard preview" 
                className="rounded-xl shadow-elegant hover-lift"
              />
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-lg shadow-card animate-pulse-subtle">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">System Status: Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of railway concession management with our comprehensive digital solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Time Saving",
                description: "Reduce processing time from weeks to minutes with automated workflows and instant digital approvals.",
                color: "text-primary"
              },
              {
                icon: FileCheck,
                title: "Paperless Process",
                description: "Go completely digital with secure document uploads, electronic signatures, and QR code verification.",
                color: "text-success"
              },
              {
                icon: Shield,
                title: "Secure & Verified",
                description: "Bank-level security with encrypted data, digital stamps, and multi-layer verification systems.",
                color: "text-accent"
              },
              {
                icon: Users,
                title: "Role-Based Access",
                description: "Separate portals for students and college administrators with tailored interfaces and permissions.",
                color: "text-primary"
              },
              {
                icon: Train,
                title: "Smart Integration",
                description: "Seamlessly connects with railway systems for real-time validation and concession tracking.",
                color: "text-success"
              },
              {
                icon: CheckCircle,
                title: "Digital Letters",
                description: "Generate official digital concession letters with QR codes, e-stamps, and 3-day validity periods.",
                color: "text-accent"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover-lift animate-scale-in card-elegant" style={{animationDelay: `${index * 100}ms`}}>
                <div className={`w-12 h-12 rounded-lg bg-${feature.color.split('-')[1]}/10 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Simple Digital Process</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our streamlined workflow makes railway concession applications faster and more transparent than ever before.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Student Application",
                    description: "Students register and submit concession applications with required documents through our secure portal."
                  },
                  {
                    step: "02", 
                    title: "College Verification",
                    description: "College administrators review applications, verify student eligibility, and approve or reject requests instantly."
                  },
                  {
                    step: "03",
                    title: "Digital Letter Generation",
                    description: "Approved applications generate official digital letters with QR codes, e-stamps, and security features."
                  },
                  {
                    step: "04",
                    title: "Railway Validation",
                    description: "Students present digital passes at railway stations for quick verification and concession benefits."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 animate-slide-up" style={{animationDelay: `${index * 150}ms`}}>
                    <div className="w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-scale-in">
              <img 
                src={digitalProcess} 
                alt="Digital process illustration" 
                className="rounded-xl shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Digital?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students and colleges already using our platform for seamless railway concession management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register/student">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <GraduationCap className="w-5 h-5 mr-2" />
                Register as Student
              </Button>
            </Link>
            <Link to="/register/admin">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Shield className="w-5 h-5 mr-2" />
                Register as College Admin
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Train className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg">RailConcession</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Revolutionizing railway concession management through digital innovation and secure technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors block">About Us</Link>
                <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors block">Features</Link>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors block">Pricing</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm">
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors block">Help Center</Link>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors block">Contact</Link>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors block">FAQ</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors block">Privacy Policy</Link>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors block">Terms of Service</Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 RailConcession System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;