import axios from "axios";

export const fetchData = async () => {
  let response;
  try {
    response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  } catch (e) {
    throw new Error(e.message);
  }
  return response?.data ? response?.data : null;
};
