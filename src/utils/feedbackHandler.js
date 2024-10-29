import axios from "axios";
import { endpoint } from "./endpoint";

export async function feedbacks() {
  try {
    const response = await axios.get(`${endpoint.feedbackEndpoint}/get-all`);

    return {
      studentsFeedback: response.data.filter((feedback) => !feedback.teacherId),

      teachersFeedback: response.data.filter((feedback) => !feedback.studentId),
    };
  } catch (error) {
    console.error("Create batch error: ", error);
    throw error;
  }
}
