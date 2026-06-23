import axios from "axios";
import type { SentimentResponse } from "../types/sentiment";

const API_URL = import.meta.env.VITE_API_URL;

export const analyzeText = async (
  text: string
): Promise<SentimentResponse> => {
  const response = await axios.post(
    `${API_URL}/analyze`,
    { text }
  );

  return response.data;
};