import React from "react";
import ForecastHours from "./ForecastHours";

const DayDetails = ({ data }) => {
  const fellsLike = data?.current?.feelslike_c;
  const humidity = data?.current?.humidity;
  const wind = data?.current?.wind_kph;
  const sunrise = data?.forecast?.forecastday[0]?.astro?.sunrise;
  const sunset = data?.forecast?.forecastday[0]?.astro?.sunset;
  const maxTemp = data?.forecast?.forecastday[0]?.day?.maxtemp_c;
  const minTemp = data?.forecast?.forecastday[0]?.day?.mintemp_c;

  return (
    <div className="p-4 flex flex-col gap-y-2 justify-center text-center sm:text-left rounded-xl m-4 bg-[rgba(255,255,255,0.3)] shadow-md max-w-full">
      <div className="flex items-center justify-between border-slate-300 border-b">
        <p className="text-blue-900 tracking-wider">Feels like:</p>
        <span className="ml-2 font-semibold text-sm">{fellsLike}&deg;C</span>
      </div>
      <div className="flex items-center justify-between border-slate-300 border-b">
        <p className="text-blue-900 tracking-wider">Humidity: </p>
        <span className="ml-2 font-semibold text-sm">{humidity}&deg;C</span>
      </div>
      <div className="flex items-center justify-between border-slate-300 border-b">
        <p className="text-blue-900 tracking-wider"> Wind: </p>
        <span className="ml-2 font-semibold text-sm">{wind}km/h</span>
      </div>
      <div className="flex items-center justify-between border-slate-300 border-b">
        <p className="text-blue-900 tracking-wider">Sunrise:</p>
        <span className="ml-2 font-semibold text-sm">{sunrise}</span>
      </div>
      <div className="flex items-center justify-between border-slate-300 border-b">
        <p className="text-blue-900 tracking-wider">Sunset:</p>
        <span className="ml-2 font-semibold text-sm">{sunset}</span>
      </div>
      <div className="flex items-center justify-between border-slate-300 border-b">
        <p className="text-blue-900 tracking-wider"> Max temperature:</p>
        <span className="ml-2 font-semibold text-sm">{maxTemp} &deg;C</span>
      </div>
      <div className="flex items-center justify-between border-slate-300 border-b">
        <p className="text-blue-900 tracking-wider"> Min temperature:</p>
        <span className="ml-2 font-semibold text-sm">{minTemp} &deg;C</span>
      </div>
      <div className="w-[70vw] sm:max-w-full mx-auto overflow-hidden ">
        <ForecastHours data={data} />
      </div>
    </div>
  );
};

export default DayDetails;
