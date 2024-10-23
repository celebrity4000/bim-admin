import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Edit } from "lucide-react"
import { useState } from "react"
import { ScrollArea } from "../ui/scroll-area"
import { editCourse } from "@/utils/courseHandler"


const EditCourse = ({ title, description, content, price, offerPrice, instructorName, enrolledStudent, courseId, imageUrl}) => {

    const [form, setForm] = useState({
        id: null,
        title: title,
        description: description,
        content: content,
        price: price,
        instructorName: instructorName,
        enrolledStudent: enrolledStudent,
        offerPrice: offerPrice,
        image: null,
        video: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm({ ...form, image: file });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const adminId = localStorage.getItem ('adminId');
            await editCourse (adminId, courseId, form.title, form.price, form.offerPrice, form.description, form.content, form.image, form.instructorName, form.enrolledStudent)
        } catch (error) {
            console.log ("course edit error: ", error);
        }
        alert("Course Edited");
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost">
                    <Edit className="h-4 w-4" />
                    <span>&nbsp; Edit</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] bg-white !rounded-[10px]">
                <DialogTitle className="font-medium">
                    <div className=" bg-[#fff] rounded-[8px]">
                        <h1 className="font-[600] text-[20px] mb-5">General information</h1>
                        <form onSubmit={handleSubmit} >
                            <ScrollArea className='h-[70vh]'>
                                <div className=" flex flex-col gap-4">
                                    <div className=" flex flex-col gap-1">
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="Title"
                                            value={form.title}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                        />
                                    </div>
                                    <div className=" flex flex-col gap-1">
                                        <label htmlFor="title">Instructor Name</label>
                                        <input
                                            type="text"
                                            name="instructorName"
                                            placeholder="Instructor Name"
                                            value={form.instructorName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                        />
                                    </div>


                                    <div className=" flex flex-col gap-1">
                                        <label htmlFor="title">Enrolled Student</label>
                                        <input
                                            type="number"
                                            name="enrolledStudent"
                                            placeholder="Enrolled Student"
                                            value={form.enrolledStudent}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                        />
                                    </div>
                                    <div className="grid grid-rows-1 gap-1 grid-cols-2">

                                        <div className=" flex flex-col gap-1">
                                            <label htmlFor="title">Price</label>
                                            <input
                                                type="number"
                                                name="price"
                                                placeholder="Price"
                                                value={form.price}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                            />
                                        </div>

                                        <div className=" flex flex-col gap-1">
                                            <label htmlFor="title">Offer price</label>
                                            <input
                                                type="number"
                                                name="offerPrice"
                                                placeholder="Offer Price"
                                                value={form.offerPrice}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className=" flex flex-col gap-1">
                                        <label htmlFor="title">Description</label>
                                        <textarea
                                            name="description"
                                            placeholder="Description"
                                            value={form.description}
                                            onChange={handleChange}
                                            required
                                            className="w-full h-[75px] px-3 py-2 border rounded-[8px] outline-none"
                                        />
                                    </div>
                                    <div className=" flex flex-col gap-1">
                                        <label htmlFor="title">Content</label>
                                        <textarea
                                            name="content"
                                            placeholder="Content"
                                            value={form.content}
                                            onChange={handleChange}
                                            required
                                            className="w-full h-[75px] px-3 py-2 border rounded-[8px] outline-none"
                                        />
                                    </div>
                                    <div className=" flex flex-col gap-1">
                                        <label htmlFor="title">Video</label>
                                        <input
                                            type="file"
                                            name="video"
                                            onChange={handleImageChange}
                                            className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                        />
                                    </div>
                                    <div className=" flex flex-col gap-1">
                                        <label htmlFor="title">Thumbnail Image</label>
                                        <input
                                            type="file"
                                            name="image"
                                            onChange={handleImageChange}
                                            className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                        />
                                    </div>
                                    <img
                                        src={(form.image) ? URL.createObjectURL(form.image) : imageUrl}
                                        alt="Course"
                                        className="mt-2 aspect-video object-cover"
                                    />
                                </div>
                                <DialogClose asChild>
                                    <button
                                        type="submit"
                                        className="bg-pink text-white py-4 rounded-[8px] mt-3 w-full"
                                    >
                                        Edit Course
                                    </button>
                                </DialogClose>
                            </ScrollArea>
                        </form>
                    </div>
                </DialogTitle>
            </DialogContent>

        </Dialog>
    )
}

export default EditCourse