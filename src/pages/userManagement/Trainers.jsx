"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function TrainerManagement() {
  const [trainers, setTrainers] = useState([
    { id: 1, name: "Alice Johnson", certifications: ["Java", "Python"], assignedBatches: ["Batch A", "Batch C"] },
    { id: 2, name: "Bob Smith", certifications: ["JavaScript", "React"], assignedBatches: ["Batch B"] },
    { id: 3, name: "Carol Williams", certifications: ["Data Science", "Machine Learning"], assignedBatches: ["Batch D"] },
  ])

  const [schedules, setSchedules] = useState([
    { id: 1, trainerId: 1, course: "Java Fundamentals", date: "2024-10-15", time: "09:00 AM - 11:00 AM" },
    { id: 2, trainerId: 2, course: "React Basics", date: "2024-10-16", time: "02:00 PM - 04:00 PM" },
    { id: 3, trainerId: 3, course: "Intro to Machine Learning", date: "2024-10-17", time: "10:00 AM - 12:00 PM" },
  ])

  const [feedback, setFeedback] = useState([
    { id: 1, trainerId: 1, rating: 4.5, comment: "Excellent teaching style, very clear explanations." },
    { id: 2, trainerId: 2, rating: 4.2, comment: "Good practical examples, could improve on time management." },
    { id: 3, trainerId: 3, rating: 4.8, comment: "Exceptional knowledge and engaging presentations." },
  ])

  const [selectedTrainer, setSelectedTrainer] = useState("")
  const [newSchedule, setNewSchedule] = useState({ trainerId: "", course: "", date: "", time: "" })

  const handleAddSchedule = (e) => {
    e.preventDefault()
    setSchedules([...schedules, { id: schedules.length + 1, ...newSchedule, trainerId: parseInt(newSchedule.trainerId) }])
    setNewSchedule({ trainerId: "", course: "", date: "", time: "" })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Trainer Management System</h1>
      <Tabs defaultValue="profiles" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profiles">Trainer Profiles</TabsTrigger>
          <TabsTrigger value="schedule">Schedule Management</TabsTrigger>
          <TabsTrigger value="feedback">Trainer Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="profiles">
          <Card>
            <CardHeader>
              <CardTitle>Trainer Profiles</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Certifications</TableHead>
                    <TableHead>Assigned Batches</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trainers.map((trainer) => (
                    <TableRow key={trainer.id}>
                      <TableCell>{trainer.name}</TableCell>
                      <TableCell>
                        {trainer.certifications.map((cert, index) => (
                          <Badge key={index} variant="secondary" className="mr-1">
                            {cert}
                          </Badge>
                        ))}
                      </TableCell>
                      <TableCell>
                        {trainer.assignedBatches.map((batch, index) => (
                          <Badge key={index} variant="outline" className="mr-1">
                            {batch}
                          </Badge>
                        ))}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Current Schedule</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Trainer</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {schedules.map((schedule) => (
                        <TableRow key={schedule.id}>
                          <TableCell>{trainers.find(t => t.id === schedule.trainerId)?.name}</TableCell>
                          <TableCell>{schedule.course}</TableCell>
                          <TableCell>{schedule.date}</TableCell>
                          <TableCell>{schedule.time}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Add New Schedule</h3>
                  <form onSubmit={handleAddSchedule} className="space-y-4">
                    <div>
                      <Label htmlFor="trainer">Trainer</Label>
                      <Select 
                        value={newSchedule.trainerId} 
                        onValueChange={(value) => setNewSchedule({...newSchedule, trainerId: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a trainer" />
                        </SelectTrigger>
                        <SelectContent>
                          {trainers.map((trainer) => (
                            <SelectItem key={trainer.id} value={trainer.id.toString()}>{trainer.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="course">Course</Label>
                      <Input 
                        id="course" 
                        value={newSchedule.course} 
                        onChange={(e) => setNewSchedule({...newSchedule, course: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input 
                        id="date" 
                        type="date"
                        value={newSchedule.date} 
                        onChange={(e) => setNewSchedule({...newSchedule, date: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Time</Label>
                      <Input 
                        id="time" 
                        value={newSchedule.time} 
                        onChange={(e) => setNewSchedule({...newSchedule, time: e.target.value})}
                        placeholder="e.g., 09:00 AM - 11:00 AM"
                        required
                      />
                    </div>
                    <Button type="submit" className = 'bg-pink w-full text-white'>Add Schedule</Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* <TabsContent value="feedback">
          <Card>
            <CardHeader>
              <CardTitle>Trainer Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="trainer">Select Trainer</Label>
                  <Select 
                    value={selectedTrainer} 
                    onValueChange={setSelectedTrainer}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a trainer" />
                    </SelectTrigger>
                    <SelectContent>
                      {trainers.map((trainer) => (
                        <SelectItem key={trainer.id} value={trainer.id.toString()} >{trainer.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {selectedTrainer && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Feedback for {trainers.find(t => t.id.toString() === selectedTrainer)?.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {feedback
                        .filter(f => f.trainerId.toString() === selectedTrainer)
                        .map((f, index) => (
                          <div key={index} className="mb-4 p-4 border rounded">
                            <div className="flex items-center mb-2">
                              <span className="font-semibold mr-2">Rating:</span>
                              <Progress value={f.rating * 20} className="w-1/2" />
                              <span className="ml-2">{f.rating}/5</span>
                            </div>
                            <p><span className="font-semibold">Comment:</span> {f.comment}</p>
                          </div>
                        ))
                      }
                    </CardContent>
                  </Card>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent> */}
      </Tabs>
    </div>
  )
}