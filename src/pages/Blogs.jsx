import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import EditBlog from "@/components/blog/EditBlog";
import ViewBlog from "@/components/blog/ViewBlog";
import AddBlog from "@/components/blog/AddBlog";
import { MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DeleteBlog } from "@/components/blog/DeleteBlog";
import { useEffect, useState } from "react";
import { getBlogs } from "@/utils/blogHandler";

export default function Blogs() {   
  const [blogPosts, setBlogPosts] = useState ([]);

  useEffect (()=>{
      async function getBlog (){
        try {
          const blog = await getBlogs (localStorage.getItem ('adminId'));
          const allBlog = [...blogPosts, ...blog];
          setBlogPosts (allBlog);
          console.log (allBlog);
        } catch (error) {
          throw error;
        }
      }
      getBlog();
  },[])


  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Blog Posts</h1>
        <AddBlog />
      </div>
      <Table className="bg-white rounded-[8px]">
        <TableHeader>
          <TableRow>
            <TableHead className= "font-bold text-center">Title</TableHead>
            <TableHead className="text-center font-bold">Description</TableHead>
            <TableHead className= "text-center font-bold">Author</TableHead>
            <TableHead className= "text-center font-bold">Date</TableHead>
            <TableHead className='text-center font-bold'>Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogPosts.map((post, index) => (
            <TableRow key={index}>
              <TableCell className="font-bold w-[250px] text-center">{post.title}</TableCell>
              <TableCell className="w-[350px] text-justify">
                {post.description}
              </TableCell>
              <TableCell className="font-bold text-center">{post.authorName}</TableCell>
              <TableCell className= "text-center">{post.date}</TableCell>
              <TableCell className="flex justify-center"><img src={`${post.image}`} alt='Blog Image' width={200} className="rounded-[10px] h-32"/></TableCell>
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
                      <ViewBlog title={post.title} description={post.description} author={post.authorName} date={post.date} about={post.about} imageUrl={post.image}/>
                      <EditBlog title={post.title} description={post.description} authorName={post.authorName} date={post.date} about={post.about} imageUrl={post.image} blogId={post.id}/>
                      <DeleteBlog blogId = {post.id}/>
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