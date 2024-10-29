import React, { useState } from 'react';
import { User, Mail, Phone, Shield, BookOpen, GraduationCap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('admin');
  const [profile, setProfile] = useState({
    admin: { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', role: 'Super Admin' },
    trainer: { name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', specialization: 'Web Development' },
    candidate: { name: 'Alice Johnson', email: 'alice@example.com', phone: '111-222-3333', course: 'Full Stack Development' }
  });

  const handleInputChange = (userType, field, value) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [userType]: {
        ...prevProfile[userType],
        [field]: value
      }
    }));
  };

  const renderProfileForm = (userType) => {
    const userData = profile[userType];
    return (
      <form className="space-y-4">
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5" />
          <Input
            placeholder="Name"
            value={userData.name}
            onChange={(e) => handleInputChange(userType, 'name', e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5" />
          <Input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => handleInputChange(userType, 'email', e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-5 w-5" />
          <Input
            placeholder="Phone"
            value={userData.phone}
            onChange={(e) => handleInputChange(userType, 'phone', e.target.value)}
          />
        </div>
        {userType === 'admin' && (
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <Select
              value={userData.role}
              onValueChange={(value) => handleInputChange(userType, 'role', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent >
                <SelectItem value="Super Admin">Super Admin</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Moderator">Moderator</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        {userType === 'trainer' && (
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5" />
            <Input
              placeholder="Specialization"
              value={userData.specialization}
              onChange={(e) => handleInputChange(userType, 'specialization', e.target.value)}
            />
          </div>
        )}
        {userType === 'candidate' && (
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-5 w-5" />
            <Input
              placeholder="Course"
              value={userData.course}
              onChange={(e) => handleInputChange(userType, 'course', e.target.value)}
            />
          </div>
        )}
        <Button className="w-full bg-pink text-white">Save Changes</Button>
      </form>
    );
  };

  return (
    <div className="p-4 w-1/2 m-10 ">
      <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="admin">Admin</TabsTrigger>
          <TabsTrigger value="trainer">Trainer</TabsTrigger>
          <TabsTrigger value="candidate">Candidate</TabsTrigger>
        </TabsList>
        <TabsContent value="admin">
          <Card>
            <CardHeader>
              <CardTitle>Admin Profile</CardTitle>
            </CardHeader>
            <CardContent>
              {renderProfileForm('admin')}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trainer">
          <Card>
            <CardHeader>
              <CardTitle>Trainer Profile</CardTitle>
            </CardHeader>
            <CardContent>
              {renderProfileForm('trainer')}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="candidate">
          <Card>
            <CardHeader>
              <CardTitle>Candidate Profile</CardTitle>
            </CardHeader>
            <CardContent>
              {renderProfileForm('candidate')}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileSettings;