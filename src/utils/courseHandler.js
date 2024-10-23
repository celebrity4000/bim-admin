import axios from "axios";
import { endpoint } from "./endpoint";

export async function createCourse (adminId, title, price, description, offerPrice, content, instructorName, enrolledStudent, thumbnailImage){
    try {
        const createCourse = await axios.post (`${endpoint.courseEndpoint}/${adminId}/create`,{
            title: title,
            description: description,
            price: price,
            offerPrice: offerPrice,
            content: content,
            instructorName: instructorName,
            enrolledStudent: enrolledStudent,
            thumbnailImage: thumbnailImage
        },{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        console.log (createCourse);
        return createCourse.data;
    } catch (error) {
        console.log("Create course error" + error);        
        throw error
    }
}


export async function getCourse (adminId){
    try {
        const blogs = await axios.get (`${endpoint.courseEndpoint}/${adminId}/get`);
        console.log ("url: ", `${endpoint.courseEndpoint}/${adminId}/get`);
        return blogs.data;
    } catch (error) {
        console.log("Getting blog error" + error);        
        throw error;
    }
}

export async function editCourse (adminId, courseId, title, price, offerPrice, description, content, thumbnailImage, instructorName, enrolledStudent){
    try {
        const editCourse = await axios.post (`${endpoint.courseEndpoint}/edit/${adminId}/${courseId}`,{
            title: title,
            price: price,
            offerPrice: offerPrice,
            description: description,
            content: content,
            instructorName: instructorName,
            enrolledStudent: enrolledStudent,
            thumbnailImage: thumbnailImage
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        console.log (editCourse)
        return editCourse.data;
    } catch (error) {
        console.log ("Edit Course Error" + error);
        throw error
    }
}

export async function deleteCourse (adminId, courseId){
    try {
        const deleteCourse = await axios.post (`${endpoint.courseEndpoint}/delete/${adminId}/${courseId}`)
        return deleteCourse.data;
    } catch (error) {
        console.log ("Delete Course Error" + error);
        throw error
    }
}