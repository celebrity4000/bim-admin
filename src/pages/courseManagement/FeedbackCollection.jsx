import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { feedbacks } from "@/utils/feedbackHandler";

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

  const initialTeacherFeedbackData = [
    {
      feedbackID: 1,
      feedbackType: "technical",
      userID: 1547246,
      fullName: "Emily Clarke",
      issues: "Difficulty accessing course materials.",
      bugs: "Files fail to upload, displaying an error message.",
    },
    {
      feedbackID: 2,
      feedbackType: "technical",
      userID: 1547247,
      fullName: "Brian Mitchell",
      issues: "Video conferencing tool disconnects frequently.",
      bugs: "Audio cuts out during lectures, causing interruptions.",
    },
    {
      feedbackID: 3,
      feedbackType: "user experience",
      userID: 1547248,
      fullName: "Samantha Green",
      issues: "Confusing navigation through the platform.",
      bugs: "Links to resources lead to 404 errors.",
    },
    {
      feedbackID: 4,
      feedbackType: "communication",
      userID: 1547249,
      fullName: "Kevin Adams",
      issues: "Late notifications for assignment deadlines.",
      bugs: "Announcements do not appear for some students.",
    },
    {
      feedbackID: 5,
      feedbackType: "performance",
      userID: 1547250,
      fullName: "Lisa Turner",
      issues: "The system crashes during high-traffic hours.",
      bugs: "Persistent error when accessing grades and reports.",
    },
    {
      feedbackID: 6,
      feedbackType: "integration",
      userID: 1547251,
      fullName: "Mark Wright",
      issues: "Calendar integration issues.",
      bugs: "Personal calendar does not sync with the platform.",
    },
    {
      feedbackID: 7,
      feedbackType: "technical",
      userID: 1547252,
      fullName: "Nancy Hall",
      issues: "Unable to view student submissions.",
      bugs: "Grading interface sometimes freezes.",
    },
    {
      feedbackID: 8,
      feedbackType: "user experience",
      userID: 1547253,
      fullName: "George King",
      issues: "Lack of support for managing large classes.",
      bugs: "Classroom management tools do not function as intended.",
    },
    {
      feedbackID: 9,
      feedbackType: "performance",
      userID: 1547254,
      fullName: "Patricia Scott",
      issues: "Lagging platform performance.",
      bugs: "Slow loading times for course materials.",
    },
    {
      feedbackID: 10,
      feedbackType: "communication",
      userID: 1547255,
      fullName: "Joshua Baker",
      issues: "Difficulty in providing timely feedback to students.",
      bugs: "Feedback submission sometimes fails to save.",
    },
  ];

  const [filteredFeedback, setFilteredFeedback] = useState(initialFeedbackData);
  const [filteredTeacherFeedback, setFilteredTeacherFeedback] = useState(
    initialTeacherFeedbackData
  );
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

  useEffect(() => {
    const fetchFeedbackForStudents = async () => {
      try {
        const res = await feedbacks();
        console.log(res);
        setFilteredFeedback(res.studentsFeedback);
        setFilteredTeacherFeedback(res.teachersFeedback);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFeedbackForStudents();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl text-[#00263E] font-bold pl-2 pb-6">
        Submitted Feedback
      </h1>

      <Tabs defaultValue="studentFeedback">
        <TabsList>
          <TabsTrigger value="studentFeedback">Student Feedback</TabsTrigger>
          <TabsTrigger value="teacherFeedback">Teachers Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="studentFeedback" className="space-y-4">
          {/* Filter Section */}
          <div className="flex flex-row space-x-4 mb-4">
            {/* Filter by Feedback Type */}
            <div className="flex flex-row gap-2 items-center">
              <label
                htmlFor="feedbackType"
                className="text-[#00263E] font-medium"
              >
                Feedback Type
              </label>
              <select
                id="feedbackType"
                name="feedbackType"
                onChange={handleFilterChange}
                className="p-2 rounded-lg border border-gray-300 focus:border-blue-500"
              >
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
              } flex space-x-4`}
            >
              {/* Filter by Course Rating */}
              <div className="flex flex-row gap-2 items-center">
                <label
                  htmlFor="courseRating"
                  className="text-[#00263E] font-medium"
                >
                  Course Rating
                </label>
                <select
                  id="courseRating"
                  name="courseRating"
                  onChange={handleFilterChange}
                  className="p-2 rounded-lg border border-gray-300 focus:border-blue-500"
                >
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
                  className="text-[#00263E] font-medium"
                >
                  Educator Rating
                </label>
                <select
                  id="educatorRating"
                  name="educatorRating"
                  onChange={handleFilterChange}
                  className="p-2 rounded-lg border border-gray-300 focus:border-blue-500"
                >
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
                  <TableRow key={feedback.id}>
                    <TableCell className="text-center">{feedback.id}</TableCell>
                    <TableCell className="text-center">
                      {feedback?.student ? feedback?.student?.name : ""}
                    </TableCell>
                    <TableCell className="text-center">
                      {feedback.feedbackType}
                    </TableCell>
                    <TableCell className="text-center">
                      {feedback.feedbackType === "course" ? (
                        <div className="text-left">
                          <p>
                            <strong>Course ID:</strong>{" "}
                            {feedback?.feedback
                              ? feedback?.feedback?.courseID
                              : ""}
                          </p>
                          <p>
                            <strong>Course Name:</strong>{" "}
                            {feedback?.feedback
                              ? feedback?.feedback?.courseName
                              : ""}
                          </p>

                          <p>
                            <strong>Course Rating:</strong>{" "}
                            {feedback?.feedback
                              ? feedback?.feedback?.courseRating
                              : ""}
                          </p>

                          <p>
                            <strong>Content Delivery:</strong>{" "}
                            {feedback?.feedback
                              ? feedback?.feedback?.contentDelivery
                              : ""}
                          </p>
                          <p>
                            <strong>Assignments:</strong>
                            {feedback?.feedback
                              ? feedback?.feedback?.assignments
                              : ""}
                          </p>
                          <p>
                            <strong>Exams:</strong>{" "}
                            {feedback?.feedback
                              ? feedback?.feedback?.exams
                              : ""}
                          </p>
                        </div>
                      ) : (
                        <div className="text-left">
                          <p>
                            <strong>Issues:</strong>{" "}
                            {feedback?.feedback
                              ? feedback?.feedback.issues
                              : ""}
                          </p>
                          <p>
                            <strong>Bugs:</strong>{" "}
                            {feedback?.feedback ? feedback?.feedback.bugs : ""}
                          </p>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="teacherFeedback" className="space-y-4">
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
                {filteredTeacherFeedback.map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell className="text-center">{feedback.id}</TableCell>
                    <TableCell className="text-center">
                      {feedback?.teacher ? feedback?.teacher?.name : ""}
                    </TableCell>
                    <TableCell className="text-center">
                      {feedback.feedbackType === "course"
                        ? "Course"
                        : "General"}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="text-left">
                        <p>
                          <strong>Issues:</strong>{" "}
                          {feedback.feedback ? feedback.feedback.issues : ""}
                        </p>
                        <p>
                          <strong>Bugs:</strong>{" "}
                          {feedback.feedback ? feedback.feedback.bugs : ""}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeedbackCollectionAdmin;
