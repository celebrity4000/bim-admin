import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';

const LeadConversion = () => {
  const [timeFrame, setTimeFrame] = useState('lastMonth');

  // Mock data - replace with actual data from your backend
  const conversionData = {
    lastMonth: {
      totalLeads: 500,
      convertedLeads: 150,
      conversionRate: 30,
      timeSeriesData: [
        { date: '2023-09-01', leads: 100, conversions: 25 },
        { date: '2023-09-08', leads: 120, conversions: 35 },
        { date: '2023-09-15', leads: 150, conversions: 45 },
        { date: '2023-09-22', leads: 130, conversions: 45 },
      ],
      sourceData: [
        { source: 'Website', leads: 200, conversions: 70 },
        { source: 'Referral', leads: 150, conversions: 50 },
        { source: 'Social Media', leads: 100, conversions: 20 },
        { source: 'Email Campaign', leads: 50, conversions: 10 },
      ],
    },
    lastQuarter: {
      totalLeads: 1500,
      convertedLeads: 500,
      conversionRate: 33.33,
      timeSeriesData: [
        { date: '2023-07-01', leads: 400, conversions: 120 },
        { date: '2023-08-01', leads: 500, conversions: 170 },
        { date: '2023-09-01', leads: 600, conversions: 210 },
      ],
      sourceData: [
        { source: 'Website', leads: 600, conversions: 220 },
        { source: 'Referral', leads: 450, conversions: 160 },
        { source: 'Social Media', leads: 300, conversions: 80 },
        { source: 'Email Campaign', leads: 150, conversions: 40 },
      ],
    },
    lastYear: {
      totalLeads: 6000,
      convertedLeads: 2100,
      conversionRate: 35,
      timeSeriesData: [
        { date: '2023-Q1', leads: 1200, conversions: 400 },
        { date: '2023-Q2', leads: 1500, conversions: 525 },
        { date: '2023-Q3', leads: 1600, conversions: 560 },
        { date: '2023-Q4', leads: 1700, conversions: 615 },
      ],
      sourceData: [
        { source: 'Website', leads: 2400, conversions: 900 },
        { source: 'Referral', leads: 1800, conversions: 660 },
        { source: 'Social Media', leads: 1200, conversions: 360 },
        { source: 'Email Campaign', leads: 600, conversions: 180 },
      ],
    },
  };

  const currentData = conversionData[timeFrame];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-4 m-10">
      <h1 className="text-2xl font-bold mb-4">Lead Conversion Analysis</h1>

      <div className="mb-4">
        <Select value={timeFrame} onValueChange={setTimeFrame}>
          <SelectTrigger className = 'bg-white'>
            <SelectValue placeholder="Select time frame" />
          </SelectTrigger>
          <SelectContent className = 'bg-white'>
            <SelectItem value="lastMonth">Last Month</SelectItem>
            <SelectItem value="lastQuarter">Last Quarter</SelectItem>
            <SelectItem value="lastYear">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 ">
        <Card className = 'bg-white'>
          <CardHeader>
            <CardTitle>Total Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{currentData.totalLeads}</p>
          </CardContent>
        </Card>
        <Card className = 'bg-white'>
          <CardHeader>
            <CardTitle>Converted Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{currentData.convertedLeads}</p>
          </CardContent>
        </Card>
        <Card className = 'bg-white'>
          <CardHeader>
            <CardTitle>Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{currentData.conversionRate}%</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6 bg-white">
        <CardHeader>
          <CardTitle>Conversion Over Time</CardTitle>
          <CardDescription>Leads vs Conversions</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={currentData.timeSeriesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="leads" stroke="#8884d8" name="Leads" />
              <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#82ca9d" name="Conversions" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className = 'bg-white'>
          <CardHeader>
            <CardTitle>Conversion by Source</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={currentData.sourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="conversions"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {currentData.sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className = 'bg-white'>
          <CardHeader>
            <CardTitle>Source Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Source</TableHead>
                  <TableHead>Leads</TableHead>
                  <TableHead>Conversions</TableHead>
                  <TableHead>Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.sourceData.map((source) => (
                  <TableRow key={source.source}>
                    <TableCell>{source.source}</TableCell>
                    <TableCell>{source.leads}</TableCell>
                    <TableCell>{source.conversions}</TableCell>
                    <TableCell>{((source.conversions / source.leads) * 100).toFixed(2)}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadConversion;