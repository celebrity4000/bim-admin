import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Bell, Calendar, CheckCircle } from 'lucide-react';

const CertificationTracking = () => {
  const [activeTab, setActiveTab] = useState('issued');

  // Mock data - replace with actual data from your backend
  const certificationData = {
    issuedCertifications: [
      { id: 1, name: 'John Doe', certification: 'Web Development', issueDate: '2023-05-15', expiryDate: '2024-05-15' },
      { id: 2, name: 'Jane Smith', certification: 'Data Science', issueDate: '2023-06-20', expiryDate: '2024-06-20' },
      { id: 3, name: 'Alice Johnson', certification: 'UX Design', issueDate: '2023-07-10', expiryDate: '2024-07-10' },
      { id: 4, name: 'Bob Brown', certification: 'Web Development', issueDate: '2023-08-05', expiryDate: '2024-08-05' },
      { id: 5, name: 'Charlie Davis', certification: 'Data Science', issueDate: '2023-09-01', expiryDate: '2024-09-01' },
    ],
    upcomingRenewals: [
      { id: 2, name: 'Jane Smith', certification: 'Data Science', expiryDate: '2024-06-20', daysUntilExpiry: 30 },
      { id: 1, name: 'John Doe', certification: 'Web Development', expiryDate: '2024-05-15', daysUntilExpiry: 15 },
      { id: 3, name: 'Alice Johnson', certification: 'UX Design', expiryDate: '2024-07-10', daysUntilExpiry: 45 },
    ],
  };

  const certificationStats = [
    { name: 'Web Development', count: 2 },
    { name: 'Data Science', count: 2 },
    { name: 'UX Design', count: 1 },
  ];

  const getRenewalStatus = (daysUntilExpiry) => {
    if (daysUntilExpiry <= 30) return 'bg-red-500';
    if (daysUntilExpiry <= 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="p-4 m-10">
      <h1 className="text-2xl font-bold mb-4">Certification Tracking</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className = 'bg-white'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Certifications</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{certificationData.issuedCertifications.length}</div>
          </CardContent>
        </Card>
        <Card className = 'bg-white'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Renewals</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{certificationData.upcomingRenewals.length}</div>
          </CardContent>
        </Card>
        <Card className = 'bg-white'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {certificationData.upcomingRenewals.filter(cert => cert.daysUntilExpiry <= 30).length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6 bg-white">
        <CardHeader>
          <CardTitle>Certifications by Type</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={certificationStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className = 'bg-white'>
        <TabsList>
          <TabsTrigger value="issued">Issued Certifications</TabsTrigger>
          <TabsTrigger value="renewals">Upcoming Renewals</TabsTrigger>
        </TabsList>
        <TabsContent value="issued">
          <Card>
            <CardHeader>
              <CardTitle>Issued Certifications</CardTitle>
              <CardDescription>List of all certifications issued</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Certification</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Expiry Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {certificationData.issuedCertifications.map((cert) => (
                    <TableRow key={cert.id}>
                      <TableCell>{cert.name}</TableCell>
                      <TableCell>{cert.certification}</TableCell>
                      <TableCell>{cert.issueDate}</TableCell>
                      <TableCell>{cert.expiryDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="renewals" className = 'bg-white'>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Renewals</CardTitle>
              <CardDescription>Certifications due for renewal</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Certification</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Days Until Expiry</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {certificationData.upcomingRenewals.map((cert) => (
                    <TableRow key={cert.id}>
                      <TableCell>{cert.name}</TableCell>
                      <TableCell>{cert.certification}</TableCell>
                      <TableCell>{cert.expiryDate}</TableCell>
                      <TableCell>{cert.daysUntilExpiry}</TableCell>
                      <TableCell>
                        <Badge className={getRenewalStatus(cert.daysUntilExpiry)}>
                          {cert.daysUntilExpiry <= 30 ? 'Urgent' : 'Upcoming'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CertificationTracking;