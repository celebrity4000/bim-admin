import React, { useState } from "react";
import images from "../assets/course.png";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import CourseCard from "@/components/CourseCard";
const CourseManagement = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Course 1",
      description: "Description 1",
      content: "Content 1",
      price: 100,
      offerPrice: 80,
      image: images,
    },
    {
      id: 2,
      title: "Course 2",
      description: "Description 2",
      content: "Content 2",
      price: 150,
      offerPrice: 120,
      image: images,
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description 3",
      content: "Content 3",
      price: 200,
      offerPrice: 180,
      image: images,
    },
    {
      id: 4,
      title: "Course 4",
      description: "Description 3",
      content: "Content 3",
      price: 200,
      offerPrice: 180,
      image: images,
    },
    {
      id: 5,
      title: "Course 5",
      description: "Description 3",
      content: "Content 3",
      price: 200,
      offerPrice: 180,
      image: images,
    },
    {
      id: 6,
      title: "Course 6",
      description: "Description 3",
      content: "Content 3",
      price: 200,
      offerPrice: 180,
      image: images,
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    content: "",
    price: "",
    offerPrice: "",
    image: "",
  });
  

 
  const defaultImage = "https://via.placeholder.com/150"; // Default image URL

  return (
    <div className="flex-1 p-[32px]   ">
      <div className="flex justify-between items-center mb-[24px]">
        <h1 className="text-[24px] text-darkgray font-[700] pl-[10px] pb-[24px]">
          Course Managenent
        </h1>

        <Link to="createCourse">
          <button className=" flex gap-3 items-center justify-center text-[#fff] text-[16px] font-[600] bg-pink px-[10px] py-[8px] rounded-[4px]">
            <span>
              <FaPlus size={14} />
            </span>
            Create Course
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-5 py-4">
        {courses.map((course) => (          
          <CourseCard title={course.title} description={course.description} contentName = {course.content} price={course.price} offerPrice={course.offerPrice} image={course.image}/>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;
