import { DeleteCourse } from "@/components/course/DeleteCourse";
import EditCourse from "@/components/course/EditCourse";
import ViewCourse from "@/components/course/ViewCourse";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import React from "react";

function UpcomingSeasons() {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "Description 1",
      content: "Content 1",
      price: 100,
      offerPrice: 80,
      imageUrl: "https://via.placeholder.com/150",
      enrolledStudent: 10,
      instructorName: "Instructor 1",
    },
    {
      id: 2,
      title: "Course 2",
      description: "Description 2",
      content: "Content 2",
      price: 150,
      offerPrice: 120,
      imageUrl: "https://via.placeholder.com/150",
      enrolledStudent: 20,
      instructorName: "Instructor 2",
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description 3",
      content: "Content 3",
      price: 200,
      offerPrice: 180,
      imageUrl: "https://via.placeholder.com/150",
      enrolledStudent: 30,
      instructorName: "Instructor 3",
    },
    {
      id: 4,
      title: "Course 4",
      description: "Description 4",
      content: "Content 4",
      price: 250,
      offerPrice: 200,
      imageUrl: "https://via.placeholder.com/150",
      enrolledStudent: 40,
      instructorName: "Instructor 4",
    },
    {
      id: 5,
      title: "Course 5",
      description: "Description 5",
      content: "Content 5",
      price: 300,
      offerPrice: 250,
      imageUrl: "https://via.placeholder.com/150",
      enrolledStudent: 50,
      instructorName: "Instructor 5",
    },
    {
      id: 6,
      title: "Course 6",
      description: "Description 6",
      content: "Content 6",
      price: 350,
      offerPrice: 300,
      imageUrl: "https://via.placeholder.com/150",
      enrolledStudent: 60,
      instructorName: "Instructor 6",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Courses</h1>
      </div>
      <Table className="bg-white rounded-[8px]">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center font-bold">Title</TableHead>
            <TableHead className="text-center font-bold">Instructor</TableHead>
            <TableHead className="text-center font-bold">Content</TableHead>
            <TableHead className="text-center font-bold">Price</TableHead>
            <TableHead className="text-center font-bold">Offer Price</TableHead>
            <TableHead className="text-center font-bold">Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-bold w-[200px] text-center">
                {post.title}
              </TableCell>
              <TableCell className=" text-center font-bold">
                {post.instructorName}
              </TableCell>
              <TableCell className="text-center">{post.content}</TableCell>
              <TableCell className="text-center">₹{post.price}</TableCell>
              <TableCell className="text-center">₹{post.offerPrice}</TableCell>
              <TableCell className="flex justify-center">
                <img
                  src={post.imageUrl}
                  alt="Blog Image"
                  width={200}
                  className="rounded-[10px] h-32"
                />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-white rounded-[8px]">
                    <div className="flex flex-col justify-start p-0">
                      <ViewCourse
                        title={post.title}
                        description={post.description}
                        image={post.imageUrl}
                        content={post.content}
                      />
                      <EditCourse
                        title={post.title}
                        description={post.description}
                        content={post.content}
                        price={post.price}
                        offerPrice={post.offerPrice}
                        imageUrl={post.imageUrl}
                        enrolledStudent={post.enrolledStudent}
                        instructorName={post.instructorName}
                        courseId={post.id}
                      />
                      <DeleteCourse courseId={post.id} />
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UpcomingSeasons;
