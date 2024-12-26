import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { FaPlus } from "react-icons/fa6"
import { ScrollArea } from "../ui/scroll-area"
import { createCourse } from "@/utils/courseHandler"
import { DialogDescription } from "@radix-ui/react-dialog"


const AddCourse = () => {

    const [formData, setFormData] = useState({
        id: null,
        title: "",
        description: "",
        content: "",
        price: "",
        instructorName: "",
        enrolledStudent: "0",
        offerPrice: "",
        image: null,
        video: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        if (file) {
            setFormData({ ...formData, image: file });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("formData data", formData)
        try {
            // const adminId = localStorage.getItem ('adminId')
            await createCourse (formData.title, formData.price, formData.description, formData.offerPrice, formData.content, formData.instructorName, formData.enrolledStudent, formData.image)
        } catch (error) {
            console.log ('Course Creation error');
        }
        finally{
            alert("submitted");
        }
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="flex gap-3 items-center justify-center text-[#fff] text-[16px] font-[600] bg-pink px-[10px] py-[8px] rounded-[8px]">
                    <span>
                        <FaPlus size={14} />
                    </span>
                    Add Course
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] bg-white !rounded-[10px]">
                <DialogTitle className="font-medium">
                    <DialogDescription className="font-[600] text-[20px] mb-5">General information</DialogDescription>
                    <div className=" bg-[#fff] rounded-[8px]">
                        <form onSubmit={handleSubmit} >
                            {/* <h1 ></h1> */}
                            <ScrollArea className='h-[70vh]'>
                                <div className=" flex flex-col gap-4">
                                    <div className=" flex flex-col gap-1">
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="Title"
                                            value={formData.title}
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
                                            value={formData.instructorName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                        />
                                    </div>


                                    {/* <div className=" flex flex-col gap-1">
                                        <label htmlFor="title">Enrolled Student</label>
                                        <input
                                            type="number"
                                            name="enrolledStudent"
                                            placeholder="Enrolled Student"
                                            value={formData.enrolledStudent}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                        />
                                    </div> */}
                                    <div className="grid grid-rows-1 gap-1 grid-cols-2">

                                        <div className=" flex flex-col gap-1">
                                            <label htmlFor="title">Price</label>
                                            <input
                                                type="number"
                                                name="price"
                                                placeholder="Price"
                                                value={formData.price}
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
                                                value={formData.offerPrice}
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
                                            value={formData.description}
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
                                            value={formData.content}
                                            onChange={handleChange}
                                            required
                                            className="w-full h-[75px] px-3 py-2 border rounded-[8px] outline-none"
                                        />
                                    </div>
                                    {/* <div className=" flex flex-col gap-1">
                                        <label htmlFor="title">Video</label>
                                        <input
                                            type="file"
                                            name="video"
                                            onChange={handleImageChange}
                                            className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                        />
                                    </div> */}
                                    <div className=" flex flex-col gap-1">
                                        <label htmlFor="title">Thumbnail Image</label>
                                        <input
                                            type="file"
                                            name="image"
                                            onChange={handleImageChange}
                                            className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                        />
                                    </div>
                                    {formData.image && (
                                        <img
                                            src={URL.createObjectURL(formData.image)}
                                            alt="Course"
                                            className="mt-2 aspect-video object-cover"
                                        />
                                    )}
                                </div>
                                <DialogClose asChild>
                                    <button
                                        type="button"
                                        className="bg-pink text-white py-4 rounded-[8px] mt-3 w-full"
                                        onClick={() => document.querySelector('form').requestSubmit()} // Submit 
                                    >
                                        Add Course
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

export default AddCourse