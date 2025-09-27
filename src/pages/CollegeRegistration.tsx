import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Shield, Building, GraduationCap, Mail, Phone, MapPin, Hash, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CollegeRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: `${username} registered college successfully`,
        description: "Your college registration is pending admin approval",
      });
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-scale-in">
        <div className="mb-8">
          <Link 
            to="/login" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-2">College Registration</h1>
            <p className="text-muted-foreground">
              Register your college for the railway concession system
            </p>
          </div>
        </div>

        <Card className="card-elegant p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="collegeName">College Name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="collegeName"
                  type="text"
                  placeholder="Enter college name"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="universityName">University Name</Label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="universityName"
                  type="text"
                  placeholder="Enter university name"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="collegeCode">College Code</Label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="collegeCode"
                  type="text"
                  placeholder="Enter college code"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Address Details</Label>
              <Textarea
                id="address"
                placeholder="Enter complete address (City, State, District, Pincode)"
                className="resize-none"
                rows={3}
                required
              />
            </div>

            <div>
              <Label htmlFor="officialEmail">Official College Email ID</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="officialEmail"
                  type="email"
                  placeholder="admin@college.edu"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="contactNumber">Contact Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="contactNumber"
                  type="tel"
                  placeholder="+91 XXXXXXXXXX"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="adminUsername">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="adminUsername"
                  type="text"
                  placeholder="Choose admin username"
                  className="pl-10"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="adminPassword">Password</Label>
              <Input
                id="adminPassword"
                type="password"
                placeholder="Create a strong password"
                required
              />
            </div>

            <Button type="submit" className="w-full btn-hero" disabled={isLoading}>
              {isLoading ? "Registering College..." : "Register College"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have admin access?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Login here
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CollegeRegistration;