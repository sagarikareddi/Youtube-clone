// all api work had been done here

import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  url: "https://youtube138.p.rapidapi.com/auto-complete/",
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "22d93c73f7mshbb5cc98b506a767p1ed272jsn46692c669712",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
