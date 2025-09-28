import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import railwayHero from "@/assets/railway-hero.jpg"; 
import { User, Phone, Lock, ImagePlus, Pencil, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { toast } = useToast();

  const [profile, setProfile] = useState({
    fullName: "Mahesh Patil",
    mobile: "+91 9876543210",
    password: "********",
    profilePicture: "https://via.placeholder.com/200",
  });

  const [formData, setFormData] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profilePicture: imageUrl });
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your changes have been saved successfully.",
    });
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6 flex justify-center items-center"
      style={{
        backgroundImage: `url(${railwayHero})`, // 🔹 Change to your own bg image
      }}
    >
      <Card className="w-full max-w-4xl p-8 bg-white/70 backdrop-blur-sm shadow-xl rounded-2xl relative">
        {/* 🔙 Back Button Top-Right */}
        <Link
          to="/dashboard/student"
          className="absolute top-4 right-4 flex items-center gap-2 text-muted-foreground hover:text-primary transition"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>Back To Dashboard</span> 
        </Link>

        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="mobile">Mobile Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-48 h-48">
              <img
                src={formData.profilePicture}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-primary shadow-md"
              />
              {isEditing && (
                <label className="absolute bottom-2 right-2 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/90 transition">
                  <ImagePlus className="w-5 h-5" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
          </div>
        </form>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          {!isEditing ? (
            <Button type="button" className="btn-hero" onClick={() => setIsEditing(true)}>
              <Pencil className="w-4 h-4 mr-2" />
              Update Profile
            </Button>
          ) : (
            <>
              <Button type="submit" className="btn-hero" onClick={handleSave}>
                Save Changes
              </Button>
              <Button type="button" variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
