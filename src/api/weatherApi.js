import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const currentBaseURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}`;
const forecastBaseURL = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}`;

export const fetchCurrentWether = async (city) => {
  const response = await axios.get(`${currentBaseURL}&q=${city}`);
  const data = response.data;
  return data;
};

export const fetchForecastWether = async (city) => {
  const response = await axios.get(`${forecastBaseURL}&q=${city}&days=5`);
  const data = response.data;
  return data;
};
