import { useState } from "react";
import { topRatedSeries } from "../interfaces/topRatedSeries";

export const useTopRatedSeries = () => {
  const apiURL = import.meta.env.VITE_MOVIES_API_URL;
  const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
  const [isLoading, setIsLoading] = useState(false);

  const getTopRatedSeries = async () => {
    setIsLoading(true);
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTM5MWZjNmVlZGJlM2E1OTdkMTJkZGM4ZGQ4ZDcwOCIsInN1YiI6IjY2MDQ1YjIyNDU5YWQ2MDE4N2ZkYjZmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UMbylSXQaZYXv5swyjAhT2XwulJNIu_GM3tcD5CNE1k`
        },
      };

      const response = await fetch(
        `${apiURL}tv/top_rated?language=en-US&page=1?api_key=${apiKey}`,
        options
      );
      const data = await response.json();
      return data as topRatedSeries;
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, getTopRatedSeries };
};
