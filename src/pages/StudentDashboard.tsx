import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  Plus, 
  User, 
  History, 
  FileText, 
  Train, 
  Calendar, 
  MapPin, 
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  LogOut
} from "lucide-react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const [applications, setApplications] = useState([
    {
      id: "RP001",
      route: "Malad  → Vasai Road",
      class: "Second Class",
      duration: "Monthly",
      status: "approved",
      appliedDate: "2025-01-15",
      validUntil: "2025-02-15",
      progress: 100
    },
    {
      id: "RP002", 
      route: "Goregaon → Vasai Road",
      class: "First Class",
      duration: "Quarterly",
      status: "pending",
      appliedDate: "2025-01-20",
      validUntil: "N/A",
      progress: 60
    },
    {
      id: "RP003",
      route: "Virar → Vasai Road",
      class: "Second Class", 
      duration: "Monthly",
      status: "rejected",
      appliedDate: "2025-01-10",
      validUntil: "N/A",
      progress: 100
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-success text-success-foreground';
      case 'pending': return 'bg-warning text-warning-foreground';
      case 'rejected': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle;
      case 'pending': return Clock;
      case 'rejected': return XCircle;
      default: return AlertCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Train className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Student Dashboard</h2>
              <p className="text-xs text-muted-foreground">Railway Concession System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full text-xs"></span>
            </Button>
            <Link to ="/">
            <Button variant="ghost" size="sm">
              <LogOut className="w-5 h-5" />
            </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Manage your railway concession applications and track their status.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 card-elegant hover-lift animate-scale-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Applications</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <FileText className="w-8 h-8 text-primary" />
            </div>
          </Card>
          <Card className="p-6 card-elegant hover-lift animate-scale-in" style={{animationDelay: '100ms'}}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Approved</p>
                <p className="text-2xl font-bold text-success">1</p>
              </div>
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </Card>
          <Card className="p-6 card-elegant hover-lift animate-scale-in" style={{animationDelay: '200ms'}}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-warning">1</p>
              </div>
              <Clock className="w-8 h-8 text-warning" />
            </div>
          </Card>
          <Card className="p-6 card-elegant hover-lift animate-scale-in" style={{animationDelay: '300ms'}}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Passes</p>
                <p className="text-2xl font-bold text-primary">1</p>
              </div>
              <Train className="w-8 h-8 text-primary" />
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="applications" className="animate-slide-up">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="applications">My Applications</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <Link to ="/apply">
                <Button className="btn-hero">
                  <Plus className="w-4 h-4 mr-2" />
                  New Application
                </Button>
                </Link>
              </div>

              <TabsContent value="applications" className="space-y-4">
                {applications.map((app) => {
                  const StatusIcon = getStatusIcon(app.status);
                  return (
                    <Card key={app.id} className="p-6 card-elegant hover-lift">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">Application #{app.id}</h3>
                            <Badge className={getStatusColor(app.status)}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {app.route}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {app.duration}
                            </div>
                          </div>
                        </div>
                        {app.status === 'approved' && (
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download Pass
                          </Button>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{app.progress}%</span>
                        </div>
                        <Progress value={app.progress} className="h-2" />
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Applied: </span>
                            <span className="font-medium">{app.appliedDate}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Valid Until: </span>
                            <span className="font-medium">{app.validUntil}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </TabsContent>

              <TabsContent value="history">
                <Card className="p-6 card-elegant">
                  <div className="text-center py-8">
                    <History className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Application History</h3>
                    <p className="text-muted-foreground">Your past applications and their details will appear here.</p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '400ms'}}>
            {/* Quick Actions */}
            <Card className="p-6 card-elegant">
              <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/apply">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    Apply for New Pass
                  </Button>
                </Link>
                <Link to="/Profile">
                  <Button variant="outline" className="w-full justify-start transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/10">
                    <User className="w-4 h-4 mr-2" />
                    Update Profile
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Renewal Alert */}
            <Card className="p-6 card-elegant border-warning bg-warning/5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-warning mt-0.5" />
                <div>
                  <h4 className="font-semibold text-warning mb-2">Renewal Reminder</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Your Malad - Vasai Road pass expires in 15 days. Renew now to avoid interruption.
                  </p>
                  <Link to = "/apply">
                  <Button size="sm" className="btn-hero">
                    Renew Now
                  </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Recent Notifications */}
            <Card className="p-6 card-elegant">
              <h3 className="font-semibold text-lg mb-4">Recent Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                  <div className="text-sm">
                    <p className="font-medium">Application Approved</p>
                    <p className="text-muted-foreground">Your railway pass for Malad - Vasai route has been approved.</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div className="text-sm">
                    <p className="font-medium">Document Verified</p>
                    <p className="text-muted-foreground">Your student ID has been successfully verified.</p>
                    <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;