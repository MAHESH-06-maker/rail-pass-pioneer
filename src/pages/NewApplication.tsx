import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Train, MapPin, Calendar, Ticket } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const NewApplication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate application submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Application Submitted",
        description: "Your railway pass application has been submitted for review",
      });
      navigate('/dashboard/student');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-scale-in">
        <div className="mb-8">
          <Link 
            to="/dashboard/student" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <Train className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-2">New Pass Application</h1>
            <p className="text-muted-foreground">
              Apply for your railway concession pass
            </p>
          </div>
        </div>

        <Card className="card-elegant p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fromStation">Starting Station</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="fromStation"
                  type="text"
                  placeholder="Enter starting station"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="toStation">Ending Station</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="toStation"
                  type="text"
                  placeholder="Enter ending station"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="duration">Duration</Label>
              <Select required>
                <SelectTrigger className="w-full">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Select duration" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1month">1 Month</SelectItem>
                  <SelectItem value="3months">3 Months</SelectItem>
                  <SelectItem value="6months">6 Months</SelectItem>
                  <SelectItem value="1year">1 Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-base font-medium">Class</Label>
              <RadioGroup defaultValue="" className="mt-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="first" id="first" />
                  <div className="flex items-center flex-1">
                    <Ticket className="w-4 h-4 mr-2 text-muted-foreground" />
                    <Label htmlFor="first" className="cursor-pointer flex-1">
                      1st Class
                    </Label>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="second" id="second" />
                  <div className="flex items-center flex-1">
                    <Ticket className="w-4 h-4 mr-2 text-muted-foreground" />
                    <Label htmlFor="second" className="cursor-pointer flex-1">
                      2nd Class
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full btn-hero" disabled={isLoading}>
              {isLoading ? "Sending Application..." : "Send Application"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default NewApplication;