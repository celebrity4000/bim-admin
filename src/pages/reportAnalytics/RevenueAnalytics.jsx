import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

const RevenueAnalytics = () => {
  const [timeFrame, setTimeFrame] = useState('lastMonth');
  const [view, setView] = useState('batch');

  // Mock data - replace with actual data from your backend
  const revenueData = {
    lastMonth: {
      totalRevenue: 150000,
      batchRevenue: [
        { name: 'Batch A', revenue: 50000 },
        { name: 'Batch B', revenue: 40000 },
        { name: 'Batch C', revenue: 60000 },
      ],
      courseRevenue: [
        { name: 'Web Development', revenue: 70000 },
        { name: 'Data Science', revenue: 50000 },
        { name: 'UX Design', revenue: 30000 },
      ],
      timeSeriesRevenue: [
        { date: '2023-09-01', revenue: 35000 },
        { date: '2023-09-08', revenue: 40000 },
        { date: '2023-09-15', revenue: 38000 },
        { date: '2023-09-22', revenue: 37000 },
      ],
    },
    lastQuarter: {
      totalRevenue: 450000,
      batchRevenue: [
        { name: 'Batch A', revenue: 150000 },
        { name: 'Batch B', revenue: 120000 },
        { name: 'Batch C', revenue: 180000 },
      ],
      courseRevenue: [
        { name: 'Web Development', revenue: 200000 },
        { name: 'Data Science', revenue: 150000 },
        { name: 'UX Design', revenue: 100000 },
      ],
      timeSeriesRevenue: [
        { date: '2023-07', revenue: 140000 },
        { date: '2023-08', revenue: 150000 },
        { date: '2023-09', revenue: 160000 },
      ],
    },
    lastYear: {
      totalRevenue: 1800000,
      batchRevenue: [
        { name: 'Batch A', revenue: 600000 },
        { name: 'Batch B', revenue: 500000 },
        { name: 'Batch C', revenue: 700000 },
      ],
      courseRevenue: [
        { name: 'Web Development', revenue: 800000 },
        { name: 'Data Science', revenue: 600000 },
        { name: 'UX Design', revenue: 400000 },
      ],
      timeSeriesRevenue: [
        { date: '2023-Q1', revenue: 400000 },
        { date: '2023-Q2', revenue: 450000 },
        { date: '2023-Q3', revenue: 470000 },
        { date: '2023-Q4', revenue: 480000 },
      ],
    },
  };

  const currentData = revenueData[timeFrame];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  return (
    <div className="p-4 m-10">
      <h1 className="text-2xl font-bold mb-4">Revenue Analytics</h1>

      <div className="flex justify-between items-center mb-4 ">
        <Select value={timeFrame} onValueChange={setTimeFrame}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Select time frame" />
          </SelectTrigger>
          <SelectContent className = 'bg-white'>
            <SelectItem value="lastMonth">Last Month</SelectItem>
            <SelectItem value="lastQuarter">Last Quarter</SelectItem>
            <SelectItem value="lastYear">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="mb-6 bg-white">
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{formatCurrency(currentData.totalRevenue)}</p>
        </CardContent>
      </Card>

      <Tabs value={view} onValueChange={setView} className="mb-6">
        <TabsList>
          <TabsTrigger value="batch">By Batch</TabsTrigger>
          <TabsTrigger value="course">By Course</TabsTrigger>
          <TabsTrigger value="time">Over Time</TabsTrigger>
        </TabsList>

        <TabsContent value="batch">
          <Card className = 'bg-white'>
            <CardHeader>
              <CardTitle>Revenue by Batch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={currentData.batchRevenue}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={currentData.batchRevenue}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="revenue"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {currentData.batchRevenue.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="course">
          <Card className = 'bg-white'>
            <CardHeader>
              <CardTitle>Revenue by Course</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={currentData.courseRevenue}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                    <Legend />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={currentData.courseRevenue}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#82ca9d"
                      dataKey="revenue"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {currentData.courseRevenue.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="time">
          <Card className = 'bg-white'>
            <CardHeader>
              <CardTitle>Revenue Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={currentData.timeSeriesRevenue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend />
                  <Bar dataKey="revenue" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className = 'bg-white'>
        <CardHeader>
          <CardTitle>Detailed Revenue Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Percentage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(view === 'batch' ? currentData.batchRevenue : currentData.courseRevenue).map((item) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{formatCurrency(item.revenue)}</TableCell>
                  <TableCell>{((item.revenue / currentData.totalRevenue) * 100).toFixed(2)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RevenueAnalytics;