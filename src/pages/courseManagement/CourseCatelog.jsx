import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import AddCourse from "@/components/course/AddCourse";
import EditCourse from "@/components/course/EditCourse";
import ViewCourse from "@/components/course/ViewCourse";
import { DeleteCourse } from "@/components/course/DeleteCourse";
import { useEffect, useState } from "react";
import { getCourse } from "@/utils/courseHandler";

export default function CourseCatelog() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      try {
        const course = await getCourse(localStorage.getItem('adminId'));
        const allCourse = [...courses, ...course];
        setCourses(allCourse);
        console.log(allCourse);
      } catch (error) {
        throw error;
      }
    }
    getCourses();
  }, [])


  return (
    <div className="m-10 p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Courses</h1>
        <AddCourse />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center font-bold">Title</TableHead>
            <TableHead className="text-center font-bold">Instructor</TableHead>
            <TableHead className="text-center font-bold">Enrolled Student</TableHead>
            <TableHead className='text-center font-bold'>Content</TableHead>
            <TableHead className='text-center font-bold'>Price</TableHead>
            <TableHead className='text-center font-bold'>Offer Price</TableHead>
            <TableHead className='text-center font-bold'>Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-bold w-[200px] text-center">{post.title}</TableCell>
              <TableCell className=" text-center font-bold">
                {post.instructorName}
              </TableCell>
              <TableCell className=" text-center">
                {post.enrolledStudent}
              </TableCell>
              <TableCell className="text-center">
                {post.content}
              </TableCell>
              <TableCell className='text-center'>₹{post.price}</TableCell>
              <TableCell className='text-center'>₹{post.offerPrice}</TableCell>
              <TableCell className="flex justify-center"><img src={post.imageUrl} alt='Blog Image' width={200} className="rounded-[10px] h-32" /></TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" >
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white rounded-[8px]"  >
                    <div className="flex flex-col justify-start p-0">
                      <ViewCourse title = {post.title} description={post.description} image={post.imageUrl} content={post.content}/>
                      <EditCourse title={post.title} description={post.description} content={post.content} price={post.price} offerPrice={post.offerPrice} imageUrl={post.imageUrl} enrolledStudent={post.enrolledStudent} instructorName={post.instructorName} courseId={post.id}/>
                      <DeleteCourse courseId = {post.id}/>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}