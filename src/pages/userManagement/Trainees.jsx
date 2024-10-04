"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

export default function Trainee() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "John Doe", status: "Active", progress: "75%", batch: "Batch 1" },
    { id: 2, name: "Jane Smith", status: "Completed", progress: "100%", batch: "Batch 2" },
    { id: 3, name: "Alice Johnson", status: "Inactive", progress: "30%", batch: "Batch 1" },
  ])
  const [newCandidate, setNewCandidate] = useState({ name: "", batch: "" })
  const [selectedCandidate, setSelectedCandidate] = useState("")

  const handleEnrolment = (e) => {
    e.preventDefault()
    setCandidates([...candidates, { 
      id: candidates.length + 1, 
      name: newCandidate.name, 
      status: "Active", 
      progress: "0%", 
      batch: newCandidate.batch 
    }])
    setNewCandidate({ name: "", batch: "" })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Trainee Management System</h1>
      <Tabs defaultValue="profiles" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profiles">Candidate Profiles</TabsTrigger>
          <TabsTrigger value="enrolment">Enrolment</TabsTrigger>
          {/* <TabsTrigger value="progress">Progress Reports</TabsTrigger> */}
        </TabsList>

        <TabsContent value="profiles" className= 'bg-white'>
          <Card>
            <CardHeader>
              <CardTitle>Candidate Profiles</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Batch</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {candidates.map((candidate) => (
                    <TableRow key={candidate.id}>
                      <TableCell>{candidate.name}</TableCell>
                      <TableCell>{candidate.status}</TableCell>
                      <TableCell>{candidate.progress}</TableCell>
                      <TableCell>{candidate.batch}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="enrolment" className= 'bg-white'>
          <Card>
            <CardHeader>
              <CardTitle>Enrolment</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEnrolment} className="space-y-4">
                <div>
                  <Label htmlFor="name">Candidate Name</Label>
                  <Input 
                    id="name" 
                    value={newCandidate.name} 
                    onChange={(e) => setNewCandidate({...newCandidate, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="batch">Batch</Label>
                  <Select 
                    value={newCandidate.batch} 
                    onValueChange={(value) => setNewCandidate({...newCandidate, batch: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a batch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Batch 1">Batch 1</SelectItem>
                      <SelectItem value="Batch 2">Batch 2</SelectItem>
                      <SelectItem value="Batch 3">Batch 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className= "bg-pink text-white w-full !rounded-lg">Enrol Candidate</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* <TabsContent value="progress" className= 'bg-white'>
          <Card>
            <CardHeader>
              <CardTitle>Progress Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="candidate">Select Candidate</Label>
                  <Select 
                    value={selectedCandidate} 
                    onValueChange={setSelectedCandidate}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a candidate" />
                    </SelectTrigger>
                    <SelectContent>
                      {candidates.map((candidate) => (
                        <SelectItem key={candidate.id} value={candidate.name}>{candidate.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {selectedCandidate && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Progress Report for {selectedCandidate}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Attendance</TableCell>
                            <TableCell>90%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Course Completion</TableCell>
                            <TableCell>75%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Latest Assessment Score</TableCell>
                            <TableCell>85/100</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Feedback</TableCell>
                            <TableCell>Good progress, needs improvement in practical applications.</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
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