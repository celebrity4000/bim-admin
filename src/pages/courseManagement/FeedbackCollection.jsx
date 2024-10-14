import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search } from "lucide-react"


const teacherData = [
  {
    id: 1,
    name: "Dr. Smith",
    courseName: "Introduction to Biology",
    activeStudents: 120,
    totalFeedbacks: 87,
    feedbacks: [
      { id: 1, studentName: "Alice Johnson", feedbackText: "Dr. Smith explains complex concepts very clearly." },
      { id: 2, studentName: "Bob Williams", feedbackText: "The course material is well-organized and engaging." },
      { id: 3, studentName: "Carol Davis", feedbackText: "I appreciate the hands-on lab experiments in this course." },
    ]
  },
  {
    id: 2,
    name: "Prof. Johnson",
    courseName: "Advanced Mathematics",
    activeStudents: 85,
    totalFeedbacks: 62,
    feedbacks: [
      { id: 4, studentName: "David Brown", feedbackText: "Prof. Johnson's problem-solving techniques are very helpful." },
      { id: 5, studentName: "Emma Smith", feedbackText: "The pace of the course is challenging but manageable." },
      { id: 6, studentName: "Frank Miller", feedbackText: "I've gained a deeper understanding of mathematical concepts." },
    ]
  },
  {
    id: 3,
    name: "Ms. Williams",
    courseName: "World History",
    activeStudents: 150,
    totalFeedbacks: 105,
    feedbacks: [
      { id: 7, studentName: "Grace Lee", feedbackText: "Ms. Williams makes history come alive with her storytelling." },
      { id: 8, studentName: "Henry Wilson", feedbackText: "The course provides a great global perspective on historical events." },
      { id: 9, studentName: "Isabel Garcia", feedbackText: "I enjoy the interactive discussions in this class." },
    ]
  },
]

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTeacher, setSelectedTeacher] = useState(null)

  const filteredTeachers = teacherData.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="m-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Teacher Overview</h1>
      
      <div className="relative mb-4">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search by teacher or course name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8"
        />
      </div>

      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/5">Teacher Name</TableHead>
              <TableHead className="w-2/5">Course Name</TableHead>
              <TableHead className="w-1/5 text-center">Active Students</TableHead>
              <TableHead className="w-1/5 text-center">Total Feedbacks</TableHead>
              <TableHead className="w-24"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTeachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell className="font-medium">{teacher.name}</TableCell>
                <TableCell>{teacher.courseName}</TableCell>
                <TableCell className="text-center">{teacher.activeStudents}</TableCell>
                <TableCell className="text-center">{teacher.totalFeedbacks}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedTeacher(teacher)} className = "rounded-[8px] bg-pink text-white">
                        View Feedbacks
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{teacher.name} - Student Feedbacks</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Course: {teacher.courseName}</h3>
                        <ul className="space-y-4">
                          {teacher.feedbacks.map((feedback) => (
                            <li key={feedback.id} className="bg-muted p-4 rounded-lg">
                              <p className="font-medium mb-1">{feedback.studentName}</p>
                              <p className="text-sm text-muted-foreground">{feedback.feedbackText}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredTeachers.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No matching teachers or courses found.</p>
      )}
    </div>
  )
}