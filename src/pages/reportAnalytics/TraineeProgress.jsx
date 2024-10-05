import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const TraineeProgress = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [trainees] = useState([
    { id: 1, name: "Alice Johnson", progress: 75, avgScore: 88, completionRate: 80 },
    { id: 2, name: "Bob Smith", progress: 60, avgScore: 72, completionRate: 65 },
    { id: 3, name: "Charlie Brown", progress: 90, avgScore: 95, completionRate: 95 },
    { id: 4, name: "Diana Ross", progress: 85, avgScore: 91, completionRate: 88 },
    { id: 5, name: "Ethan Hunt", progress: 70, avgScore: 79, completionRate: 75 },
  ]);

  const chartData = trainees.map(trainee => ({
    name: trainee.name,
    completionRate: trainee.completionRate,
    avgScore: trainee.avgScore,
  }));

  const filteredTrainees = trainees.filter((trainee) =>
    trainee.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold mb-4">Trainee Progress Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card className = 'bg-white'>
          <CardHeader>
            <CardTitle>Completion Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completionRate" fill="#8884d8" name="Completion Rate (%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className = 'bg-white'>
          <CardHeader>
            <CardTitle>Average Assessment Scores</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="avgScore" fill="#82ca9d" name="Average Score" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className = 'bg-white'>
        <CardHeader>
          <CardTitle>Trainee Details</CardTitle>
          <CardDescription>Individual trainee progress and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Label htmlFor="search" className="sr-only">
              Search Trainees
            </Label>
            <Input
              id="search"
              placeholder="Search trainees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className = 'w-1/3'
            />
            <Button variant="default" onClick={() => setSearchTerm("")}>
              Clear
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Avg. Score</TableHead>
                <TableHead>Completion Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTrainees.map((trainee) => (
                <TableRow key={trainee.id}>
                  <TableCell>{trainee.name}</TableCell>
                  <TableCell>{trainee.progress}%</TableCell>
                  <TableCell>{trainee.avgScore}%</TableCell>
                  <TableCell>{trainee.completionRate}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TraineeProgress;