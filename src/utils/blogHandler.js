import axios from "axios";
import { endpoint } from "./endpoint";

export async function createBlog (adminId, title, description, about, author, date, blogImage){
    try {
        const createBlog = await axios.post(`${endpoint.blogEndpoint}/${adminId}/create`, {            
            title: title,
            description: description,
            about: about,
            author: author,
            date: date,
            blogImage: blogImage
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        console.log(createBlog);        
        return createBlog.data;
    } catch (error) {
        console.log("Blog Creation error"+ error);        
        throw error;
    }
}

export async function getBlogs (adminId){
    try {
        const blogs = await axios.get (`${endpoint.blogEndpoint}/${adminId}/get`);
        console.log ("url: ", `${endpoint.blogEndpoint}/${adminId}/get`);
        return blogs.data;
    } catch (error) {
        console.log("Getting blog error");        
        throw error;
    }
}

export async function editBlog (adminId, blogId, title, description, about, author, dateAndTime, blogImage){
    try {
        const editBlog = await axios.post (`${endpoint.blogEndpoint}/edit/${adminId}/${blogId}`, {
            title: title,
            description: description,
            about: about,
            author: author,
            dateAndTime: dateAndTime,
            blogImage: blogImage
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        console.log (editBlog);
        return editBlog.data;
    } catch (error) {
        console.log("Edit blog error"+error);        
        throw error;
    }
}

export async function deleteBlog (adminId, blogId){
    try {
        const deleteBlog = await axios.post (`${endpoint.blogEndpoint}/delete/${adminId}/${blogId}`);
        return deleteBlog.data;
    } catch (error) {
        console.log ("Blog Deletation error"+ error);
        throw error;
    }
}