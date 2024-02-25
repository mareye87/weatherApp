const ForecastHours = ({ data }) => {
  const hourlyForecast = data?.forecast?.forecastday[0]?.hour;
  return (
    <div className=" my-6 flex gap-x-20 pb-1 overflow-x-scroll border-blue-500 border-b  ">
      {hourlyForecast.map((forecast, index) => {
        const time = forecast?.time;
        const temp = forecast?.temp_c;
        return (
          <div
            key={index}
            className="flex flex-col gap-y-2 items-center justify-between min-h-full   "
          >
            <span className="text-xs mt-2 text-slate-800 font-semibold tracking-wider">
              {time.substring(time.length - 5)}
            </span>
            <img
              src={forecast?.condition?.icon}
              alt="condition-icon"
              className=" w-full "
            />
            <span className=" px-2 text-xs text-slate-800 font-semibold ">
              {temp}&deg;C
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ForecastHours;
