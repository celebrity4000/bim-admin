import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
    DialogTitle
} from "@/components/ui/dialog"
import { createBlog } from "@/utils/blogHandler"
import { useState } from "react"
import { FaPlus } from "react-icons/fa6"
import { ScrollArea } from "../ui/scroll-area"


const AddBlog = () => {
    const [form, setForm] = useState({
        id: null,
        title: "",
        description: "",
        about: "",
        authorName: "",
        date: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm({ ...form, image:file });
        }
    };
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const adminId = localStorage.getItem('adminId');
            const date = '2024-08-24T12:30:00Z';
            await createBlog (adminId, form.title, form.description, form.about, form.authorName, date, form.image)
        } catch (error) {
            console.log("blog creation error", error);            
        }
        finally{
            console.log(form);
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
                    Add Blog
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] bg-white !rounded-[10px]">
                <DialogTitle>
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
                                    <label htmlFor="title">Author Name</label>
                                    <input
                                        type="text"
                                        name="authorName"
                                        placeholder="Author Name"
                                        value={form.authorName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                    />
                                </div>
                                <div className=" flex flex-col gap-1">
                                    <label htmlFor="title">Date</label>
                                    <textarea
                                        name="date"
                                        placeholder="Date"
                                        value={form.date}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border rounded-[8px] outline-none"
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
                                    <label htmlFor="title">Description</label>
                                    <textarea
                                        name="description"
                                        placeholder="Description"
                                        value={form.description}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-[75 px] px-3 py-2 border rounded-[8px] outline-none"
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
                                {form.image && (
                                    <img
                                        src={URL.createObjectURL(form.image)}
                                        alt="Course"
                                        className="mt-2 aspect-video object-cover"
                                    />
                                )}
                            </div>
                            <DialogClose asChild>
                                <button
                                    type="submit"
                                    className="bg-pink text-white py-4 rounded-[8px] my-[12px] w-full mt-6 "
                                >
                                    Add Blog
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

export default AddBlog