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
=======
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FeedbackCollectionAdmin = () => {
  // Example feedback data (replace with API data in real scenario)
  const initialFeedbackData = [
    {
      feedbackID: 1,
      feedbackType: "course",
      userID: 1124,
      fullName: "Ronald Richards",
      courseID: "CRS001",
      courseName: "Introduction to React",
      courseRating: 4,
      educatorID: "EDU001",
      educatorName: "John Doe",
      educatorRating: 5,
      contentDelivery:
        "The course content was well-structured and easy to follow.",
      assignments: "Assignments were challenging but fair.",
      exams: "Exams were well-organized.",
      issues: "",
      bugs: "",
    },
    {
      feedbackID: 2,
      feedbackType: "general",
      userID: 3524,
      fullName: "Albert Flores",
      issues: "The platform sometimes lags.",
      bugs: "There are bugs in the video playback feature.",
    },
    {
      feedbackID: 3,
      feedbackType: "course",
      userID: 7571,
      fullName: "Wade Warren",
      courseID: "CRS002",
      courseName: "Advanced JavaScript",
      courseRating: 3,
      educatorID: "EDU002",
      educatorName: "Jane Smith",
      educatorRating: 4,
      contentDelivery: "Content delivery was decent but could be improved.",
      assignments: "Assignments were too difficult.",
      exams: "Exams were fine.",
      issues: "",
      bugs: "",
    },
    {
      feedbackID: 4,
      feedbackType: "general",
      userID: 124,
      fullName: "Brooklyn Simmons",
      issues: "The platform is not beginner-friendly.",
      bugs: "There are bugs in the course registration process.",
    },
    {
      feedbackID: 5,
      feedbackType: "course",
      userID: 235,
      fullName: "Devon Lane",
      courseID: "CRS003",
      courseName: "Python Basics",
      courseRating: 5,
      educatorID: "EDU003",
      educatorName: "Alice Johnson",
      educatorRating: 3,
      contentDelivery: "Content delivery was excellent.",
      assignments: "Assignments were engaging.",
      exams: "Exams were challenging.",
      issues: "",
      bugs: "",
    },
    {
      feedbackID: 6,
      feedbackType: "general",
      userID: 256,
      fullName: "Marvin McKinney",
      issues: "The platform is not mobile-friendly.",
      bugs: "There are bugs in the course search feature.",
    },
    {
      feedbackID: 7,
      feedbackType: "course",
      userID: 45,
      fullName: "Savannah Nguyen",
      courseID: "CRS004",
      courseName: "Data Structures",
      courseRating: 2,
      educatorID: "EDU004",
      educatorName: "Robert Brown",
      educatorRating: 2,
      contentDelivery: "Content delivery was poor.",
      assignments: "Assignments were not engaging.",
      exams: "Exams were too difficult.",
      issues: "",
      bugs: "",
    },
    {
      feedbackID: 8,
      feedbackType: "general",
      userID: 1001,
      fullName: "Bessie Cooper",
      issues: "The platform is not user-friendly.",
      bugs: "There are bugs in the course completion feature.",
    },
  ];

  const [filteredFeedback, setFilteredFeedback] = useState(initialFeedbackData);
  const [filter, setFilter] = useState({
    feedbackType: "",
    courseRating: "",
    educatorRating: "",
  });

  // Effect for applying the filters when filter state changes
  useEffect(() => {
    const filtered = initialFeedbackData.filter((feedback) => {
      const typeMatch = filter.feedbackType
        ? feedback.feedbackType === filter.feedbackType
        : true;
      const courseRatingMatch = filter.courseRating
        ? feedback.courseRating &&
          feedback.courseRating === parseInt(filter.courseRating)
        : true;
      const educatorRatingMatch = filter.educatorRating
        ? feedback.educatorRating &&
          feedback.educatorRating === parseInt(filter.educatorRating)
        : true;

      return typeMatch && courseRatingMatch && educatorRatingMatch;
    });

    setFilteredFeedback(filtered);
  }, [filter]);

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    setFilter((prev) => {
      // If feedbackType is set to "All", reset courseRating and educatorRating
      if (name === "feedbackType" && value === "") {
        return {
          ...prev,
          feedbackType: value,
          courseRating: "",
          educatorRating: "",
        };
      }
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl text-[#00263E] font-bold pl-2 pb-6">
        Submitted Feedback
      </h1>

      {/* Filter Section */}
      <div className="flex flex-row space-x-4 mb-4">
        {/* Filter by Feedback Type */}
        <div className="flex flex-row gap-2 items-center">
          <label htmlFor="feedbackType" className="text-[#00263E] font-medium">
            Feedback Type
          </label>
          <select
            id="feedbackType"
            name="feedbackType"
            onChange={handleFilterChange}
            className="p-2 rounded-lg border border-gray-300 focus:border-blue-500">
            <option value="">All</option>
            <option value="course">Course Feedback</option>
            <option value="general">General Feedback</option>
          </select>
        </div>

        {/* Conditionally show Course and Educator Rating Filters */}
        <div
          className={`transition-transform duration-500 ease-in-out ${
            filter.feedbackType === "course"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10 pointer-events-none"
          } flex space-x-4`}>
          {/* Filter by Course Rating */}
          <div className="flex flex-row gap-2 items-center">
            <label
              htmlFor="courseRating"
              className="text-[#00263E] font-medium">
              Course Rating
            </label>
            <select
              id="courseRating"
              name="courseRating"
              onChange={handleFilterChange}
              className="p-2 rounded-lg border border-gray-300 focus:border-blue-500">
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          {/* Filter by Educator Rating */}
          <div className="flex flex-row gap-2 items-center">
            <label
              htmlFor="educatorRating"
              className="text-[#00263E] font-medium">
              Educator Rating
            </label>
            <select
              id="educatorRating"
              name="educatorRating"
              onChange={handleFilterChange}
              className="p-2 rounded-lg border border-gray-300 focus:border-blue-500">
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </div>

      {/* Feedback Table */}
      <div className="bg-white mt-4 rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">User ID</TableHead>
              <TableHead className="text-center">Full Name</TableHead>
              <TableHead className="text-center">Feedback Type</TableHead>
              <TableHead className="text-center">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFeedback.map((feedback) => (
              <TableRow key={feedback.feedbackID}>
                <TableCell className="text-center">{feedback.userID}</TableCell>
                <TableCell className="text-center">
                  {feedback.fullName}
                </TableCell>
                <TableCell className="text-center">
                  {feedback.feedbackType === "course" ? "Course" : "General"}
                </TableCell>
                <TableCell className="text-center">
                  {feedback.feedbackType === "course" ? (
                    <div className="text-left">
                      <p>
                        <strong>Course ID:</strong> {feedback.courseID}
                      </p>
                      <p>
                        <strong>Course Name:</strong> {feedback.courseName}
                      </p>
                      <p>
                        <strong>Educator ID:</strong> {feedback.educatorID}
                      </p>
                      <p>
                        <strong>Educator Name:</strong> {feedback.educatorName}
                      </p>
                      <p>
                        <strong>Course Rating:</strong> {feedback.courseRating}
                      </p>
                      <p>
                        <strong>Educator Rating:</strong>{" "}
                        {feedback.educatorRating}
                      </p>
                      <p>
                        <strong>Content Delivery:</strong>{" "}
                        {feedback.contentDelivery}
                      </p>
                      <p>
                        <strong>Assignments:</strong> {feedback.assignments}
                      </p>
                      <p>
                        <strong>Exams:</strong> {feedback.exams}
                      </p>
                    </div>
                  ) : (
                    <div className="text-left">
                      <p>
                        <strong>Issues:</strong> {feedback.issues}
                      </p>
                      <p>
                        <strong>Bugs:</strong> {feedback.bugs}
                      </p>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FeedbackCollectionAdmin;

