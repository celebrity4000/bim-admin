import axios from "axios";
import { endpoint } from "./endpoint";

export async function createBatch({ name, startDate, endDate, trainer }) {
  try {
    const response = await axios.post(`${endpoint.batchEndpoint}/create`, {
      batchName: name,
      startDate,
      endDate,
      trainer,
    });
    return response.data;
  } catch (error) {
    console.error("Create batch error: ", error);
    throw error;
  }
}

export async function getBatches() {
  try {
    const response = await axios.get(`${endpoint.batchEndpoint}/get`);
    return response.data;
  } catch (error) {
    console.error("Get batches error: ", error);
    throw error;
  }
}

export async function editBatch({
  id,
  batchName,
  startDate,
  endDate,
  trainer,
}) {
  try {
    const response = await axios.post(`${endpoint.batchEndpoint}/edit/${id}`, {
      batchName,
      startDate,
      endDate,
      trainer,
    });
    return response.data;
  } catch (error) {
    console.error("Edit batch error: ", error);
    throw error;
  }
}

export async function deleteBatch(batchId) {
  try {
    const response = await axios.post(
      `${endpoint.batchEndpoint}/delete/${batchId}`
    );
    return response.data;
  } catch (error) {
    console.error("Delete batch error: ", error);
    throw error;
  }
}
