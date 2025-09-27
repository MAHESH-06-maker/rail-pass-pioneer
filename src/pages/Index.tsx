import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Shield, Clock, CheckCircle, Train, GraduationCap, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import railwayHero from "@/assets/railway-hero.jpg";
import digitalProcess from "@/assets/digital-process.jpg";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-card/80 backdrop-blur-md border-b sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Train className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-primary">RailPass</h2>
              <p className="text-xs text-muted-foreground">Digital Railway Pass System</p>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={railwayHero} 
            alt="Modern railway station" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70"></div>
        </motion.div>
        
        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Digital Railway
              <span className="text-primary block">Concession System</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Streamlined, paperless railway pass management for students and colleges. 
              Apply, approve, and manage railway concessions digitally with our secure platform.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link to="/login/student">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button size="lg" className="btn-hero w-full sm:w-auto">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Login as Student
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/login/admin">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button size="lg" className="btn-hero w-full sm:w-auto">
                    <Shield className="w-5 h-5 mr-2" />
                    College Admin Login
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-6 text-sm text-muted-foreground"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-success" />
                <span>100% Digital Process</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Instant Approvals</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Secure & Verified</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:block hidden"
          >
            <div className="relative">
              <motion.img 
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                src={dashboardMockup} 
                alt="Dashboard preview" 
                className="rounded-xl shadow-elegant"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of railway concession management with our comprehensive digital solution.
            </p>
          </motion.div>

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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8, rotateX: 5 }}
              >
                <Card className="p-6 card-elegant h-full">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-lg bg-${feature.color.split('-')[1]}/10 flex items-center justify-center mb-4`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
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
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true, amount: 0.8 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex gap-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0"
                    >
                      {item.step}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02, rotateY: -5 }}
            >
              <img 
                src={digitalProcess} 
                alt="Digital process illustration" 
                className="rounded-xl shadow-elegant"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6 text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Go Digital?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Join thousands of students and colleges already using our platform for seamless railway concession management.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/register/student">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Register as Student
                </Button>
              </motion.div>
            </Link>
            <Link to="/register/admin">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="w-full sm:w-auto bg-background text-primary border-0 hover:bg-background/90">
                  <Shield className="w-5 h-5 mr-2" />
                  Register as College Admin
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="bg-card border-t py-12"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center"
              >
                <Train className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <h3 className="font-bold text-xl">RailPass</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Revolutionizing railway concession management through digital innovation and secure technology.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;