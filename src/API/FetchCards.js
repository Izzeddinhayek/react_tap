import axios from "axios";
const baseURL = "https://tap-web-1.herokuapp.com";
const fetchCards = async (search) => {
  let params = new URLSearchParams({
    phrase: search,
  });
  if (search) {
    params.set("phrase", search);
  }
  try {
    const res = await axios.get(`${baseURL}/topics/list?` + params);

    if (!res.data) {
      throw new Error("Fetching data was unsuccessful");
    }
    return res.data;
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error;
  }
};

export default fetchCards;
