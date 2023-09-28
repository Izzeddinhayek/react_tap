import axios from "axios";

const FetchDetails = async (id) => {
  try {
    const res = await axios.get(
      `https://tap-web-1.herokuapp.com/topics/details/${id}`
    );
    if (!res.data) {
      throw new Error("Fetching data was unsuccessful");
    }
    return res.data;
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error;
  }
};

export default FetchDetails;
