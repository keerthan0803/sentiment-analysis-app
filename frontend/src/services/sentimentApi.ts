import axios from "axios";
import type  { SentimentResponse } from "../types/sentiment";

const API_URL = "http://localhost:5000/analyze";

export const analyzeText = async (
  text: string
): Promise<SentimentResponse> => {
  const response = await axios.post(API_URL, { text });
  return response.data;
};