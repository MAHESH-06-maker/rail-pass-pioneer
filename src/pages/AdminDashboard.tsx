import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  FileText,
  Shield,
  Download,
  Eye,
  MoreHorizontal,
  Train,
  Bell,
  LogOut,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [pendingApplications, setPendingApplications] = useState([
    {
      id: "RP002",
      studentName: "Priya Sharma",
      studentId: "CS2021001", 
      route: "Pune Junction → Mumbai Central",
      class: "First Class",
      duration: "Quarterly",
      appliedDate: "2024-01-20",
      documents: ["Student ID", "Fee Receipt", "Marksheet"],
      email: "priya.sharma@college.edu"
    },
    {
      id: "RP004",
      studentName: "Arjun Patel",
      studentId: "ME2021003",
      route: "Delhi → Chandigarh", 
      class: "Second Class",
      duration: "Monthly",
      appliedDate: "2024-01-22",
      documents: ["Student ID", "Fee Receipt"],
      email: "arjun.patel@college.edu"
    },
    {
      id: "RP005",
      studentName: "Sneha Reddy",
      studentId: "IT2020045",
      route: "Hyderabad → Bangalore",
      class: "Second Class", 
      duration: "Monthly",
      appliedDate: "2024-01-23",
      documents: ["Student ID", "Fee Receipt", "Marksheet"],
      email: "sneha.reddy@college.edu"
    }
  ]);

  const [verifiedStudents] = useState([
    {
      id: "CS2021001",
      name: "Priya Sharma",
      email: "priya.sharma@college.edu",
      course: "Computer Science",
      year: "3rd Year",
      status: "Active",
      totalPasses: 5
    },
    {
      id: "ME2021003", 
      name: "Arjun Patel",
      email: "arjun.patel@college.edu",
      course: "Mechanical Engineering",
      year: "3rd Year", 
      status: "Active",
      totalPasses: 3
    }
  ]);

  const handleApprove = (applicationId: string) => {
    setPendingApplications(prev => prev.filter(app => app.id !== applicationId));
    toast({
      title: "Application Approved",
      description: "Digital railway pass has been generated and sent to the student.",
    });
  };

  const handleReject = (applicationId: string) => {
    setPendingApplications(prev => prev.filter(app => app.id !== applicationId));
    toast({
      title: "Application Rejected", 
      description: "The student has been notified about the rejection.",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-bold text-lg">College Admin Dashboard</h2>
              <p className="text-xs text-muted-foreground">MIT College of Engineering</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full text-xs"></span>
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Welcome, Admin!</h1>
          <p className="text-muted-foreground">Manage student railway concession applications and verify student records.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 card-elegant hover-lift animate-scale-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Applications</p>
                <p className="text-2xl font-bold text-warning">{pendingApplications.length}</p>
              </div>
              <Clock className="w-8 h-8 text-warning" />
            </div>
          </Card>
          <Card className="p-6 card-elegant hover-lift animate-scale-in" style={{animationDelay: '100ms'}}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Verified Students</p>
                <p className="text-2xl font-bold text-success">{verifiedStudents.length}</p>
              </div>
              <Users className="w-8 h-8 text-success" />
            </div>
          </Card>
          <Card className="p-6 card-elegant hover-lift animate-scale-in" style={{animationDelay: '200ms'}}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Letters Generated</p>
                <p className="text-2xl font-bold text-primary">47</p>
              </div>
              <FileText className="w-8 h-8 text-primary" />
            </div>
          </Card>
          <Card className="p-6 card-elegant hover-lift animate-scale-in" style={{animationDelay: '300ms'}}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Passes</p>
                <p className="text-2xl font-bold text-accent">23</p>
              </div>
              <Train className="w-8 h-8 text-accent" />
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="pending" className="animate-slide-up">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="pending">Pending Applications</TabsTrigger>
                  <TabsTrigger value="students">Verified Students</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search applications..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <TabsContent value="pending" className="space-y-4">
                {pendingApplications.map((app) => (
                  <Card key={app.id} className="p-6 card-elegant hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{app.studentName}</h3>
                          <Badge variant="outline">#{app.studentId}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div>
                            <span className="font-medium">Route:</span> {app.route}
                          </div>
                          <div>
                            <span className="font-medium">Class:</span> {app.class}
                          </div>
                          <div>
                            <span className="font-medium">Duration:</span> {app.duration}
                          </div>
                          <div>
                            <span className="font-medium">Applied:</span> {app.appliedDate}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-warning/10 text-warning border-warning">
                        <Clock className="w-3 h-3 mr-1" />
                        Pending Review
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Submitted Documents:</p>
                      <div className="flex gap-2">
                        {app.documents.map((doc) => (
                          <Badge key={doc} variant="secondary" className="text-xs">
                            {doc}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => handleReject(app.id)}
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                        <Button 
                          size="sm" 
                          className="btn-hero"
                          onClick={() => handleApprove(app.id)}
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="students" className="space-y-4">
                {verifiedStudents.map((student) => (
                  <Card key={student.id} className="p-6 card-elegant hover-lift">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{student.name}</h3>
                          <Badge className="bg-success/10 text-success border-success">
                            Verified
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div>
                            <span className="font-medium">ID:</span> {student.id}
                          </div>
                          <div>
                            <span className="font-medium">Course:</span> {student.course}
                          </div>
                          <div>
                            <span className="font-medium">Year:</span> {student.year}
                          </div>
                          <div>
                            <span className="font-medium">Total Passes:</span> {student.totalPasses}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reports">
                <Card className="p-6 card-elegant">
                  <div className="text-center py-8">
                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Reports & Analytics</h3>
                    <p className="text-muted-foreground mb-4">
                      Generate detailed reports on student applications and system usage.
                    </p>
                    <Button className="btn-hero">
                      <Download className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
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
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Digital Letter
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Verify Student Records
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Export Applications
                </Button>
              </div>
            </Card>

            {/* System Alert */}
            <Card className="p-6 card-elegant border-warning bg-warning/5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                <div>
                  <h4 className="font-semibold text-warning mb-2">System Maintenance</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Scheduled system maintenance on Sunday, 2:00 AM - 4:00 AM IST.
                  </p>
                  <Button size="sm" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 card-elegant">
              <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                  <div className="text-sm">
                    <p className="font-medium">Application Approved</p>
                    <p className="text-muted-foreground">Rahul Kumar - Mumbai-Pune route approved</p>
                    <p className="text-xs text-muted-foreground mt-1">30 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div className="text-sm">
                    <p className="font-medium">New Application</p>
                    <p className="text-muted-foreground">Sneha Reddy submitted new application</p>
                    <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <div className="text-sm">
                    <p className="font-medium">Document Verified</p>
                    <p className="text-muted-foreground">Arjun Patel - Student ID verified</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
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

export default AdminDashboard;