import axios from "axios";

const Base_URL="https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "38bcc0c5d0msh4bb49d71e52f279p1d1e25jsnb40738b83399",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

 export const feactDataFromapi=async(url)=>{
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
    const {data}=await axios.get(`${Base_URL}/${url}`,options)
    return data;
}


