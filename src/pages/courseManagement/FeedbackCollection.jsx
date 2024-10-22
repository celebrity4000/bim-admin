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
