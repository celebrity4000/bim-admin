import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Plus, Edit, Trash2, FileText, Check } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"

export default function AssignmentsAndAssessments() {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "JavaScript Basics", description: "Complete exercises 1-10", deadline: "2023-07-15", submissions: 15, reviewed: 10 },
    { id: 2, title: "React Components", description: "Build a simple React app", deadline: "2023-07-22", submissions: 12, reviewed: 8 },
  ])

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    deadline: new Date(),
  })

  const [showNewAssignmentDialog, setShowNewAssignmentDialog] = useState(false)

  const [grades, setGrades] = useState([
    { id: 1, trainee: "Alice Johnson", assignment: "JavaScript Basics", score: 85 },
    { id: 2, trainee: "Bob Smith", assignment: "JavaScript Basics", score: 92 },
    { id: 3, trainee: "Charlie Brown", assignment: "React Components", score: 78 },
    { id: 4, trainee: "Diana Ross", assignment: "React Components", score: 88 },
  ])

  const handleCreateAssignment = () => {
    setAssignments([...assignments, { ...newAssignment, id: assignments.length + 1, submissions: 0, reviewed: 0 }])
    setShowNewAssignmentDialog(false)
    setNewAssignment({ title: "", description: "", deadline: new Date() })
  }

  return (
    <div className="m-10 space-y-6">
      <h1 className="text-3xl font-bold">Assignments & Assessments</h1>

      <Tabs defaultValue="assignments">
        <TabsList>
          <TabsTrigger value="assignments">Assignment Creation</TabsTrigger>
          <TabsTrigger value="gradebook">Grade Book</TabsTrigger>
        </TabsList>

        <TabsContent value="assignments" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Assignments</h2>
            <Dialog open={showNewAssignmentDialog} onOpenChange={setShowNewAssignmentDialog}>
              <DialogTrigger asChild>
                <Button className = 'bg-pink text-white'><Plus className="mr-2 h-4 w-4" /> Create New Assignment</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Assignment</DialogTitle>
                  <DialogDescription>
                    Enter the details for the new assignment. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                      Title
                    </Label>
                    <Input
                      id="title"
                      value={newAssignment.title}
                      onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      value={newAssignment.description}
                      onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="deadline" className="text-right">
                      Deadline
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="deadline"
                          variant={"outline"}
                          className={`col-span-3 justify-start border-gray-200 rounded-[8px] text-left font-normal ${!newAssignment.deadline && "text-muted-foreground"}`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {newAssignment.deadline ? format(newAssignment.deadline, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={newAssignment.deadline}
                          onSelect={(date) => setNewAssignment({ ...newAssignment, deadline: date })}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleCreateAssignment} className = 'bg-pink text-white'>Save Assignment</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Submissions</TableHead>
                <TableHead>Reviewed</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableCell>{assignment.title}</TableCell>
                  <TableCell>{assignment.description}</TableCell>
                  <TableCell>{assignment.deadline}</TableCell>
                  <TableCell>{assignment.submissions}</TableCell>
                  <TableCell>{assignment.reviewed}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><FileText className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="gradebook" className="space-y-4">
          <h2 className="text-2xl font-semibold">Grade Book</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Trainee</TableHead>
                <TableHead>Assignment</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grades.map((grade) => (
                <TableRow key={grade.id}>
                  <TableCell>{grade.trainee}</TableCell>
                  <TableCell>{grade.assignment}</TableCell>
                  <TableCell>{grade.score}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><Check className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  )
}