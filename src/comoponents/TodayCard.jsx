import { useQuery } from "react-query";
import { useGlobalContext } from "../context";
import WeekDay from "./WeekDay";
import { fetchForecastWether } from "../api/weatherApi";
import Loading from "./Loading";
import Error from "./Error";
import DayDetails from "./DayDetails";
import moreImg from "../assets/images/icons8-arrow-down-48.png";

const TodayCard = () => {
  const { city, showMore, setShowMore } = useGlobalContext();

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["city", city],
    queryFn: () => fetchForecastWether(city),
    staleTime: 60000,
  });

  const cityName = data?.location?.name;
  const todayTemp = data?.current?.temp_c;
  const conditions = data?.current?.condition?.text;
  const icon = data?.current?.condition?.icon;
  const weeksForecast = data?.forecast?.forecastday;
  const errorMsg = error?.response?.data?.error?.message;

  const showMoreBtn = (
    <button
      onClick={() => {
        setShowMore(!showMore);
      }}
      className={`absolute top-2 right-2 w-7 h-7 opacity-90 ${
        !showMore && "animate-bounce"
      }`}
    >
      <img
        src={moreImg}
        alt="more-image"
        className={`${showMore && "rotate-180"} transition-all duration-200 `}
      />
    </button>
  );

  const imageDiv = (
    <div className="flex flex-col justify-center items-center ">
      <img src={icon} alt="sun-image" className="w-1/2 " />
    </div>
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error text={errorMsg} />;

  return (
    <div
      className={`mt-8 sm:mt-4 grid sm:grid-cols-2 bg-[rgba(255,255,255,0.2)] rounded-xl shadow-md relative pb-10 transition-all duration-300`}
    >
      {showMoreBtn}
      {imageDiv}
      <div className="px-6 pb-10 sm:py-6 text-center sm:text-left  ">
        <p className="text-lg">Today</p>
        <p className="text-3xl capitalize">{cityName}</p>
        <p className="text-lg">{todayTemp} &deg; C</p>
        <p className="text-sm">{conditions}</p>
      </div>
      <div
        className={`${
          showMore ? "h-full" : "overflow-hidden h-0 "
        } col-span-full transition-all duration-300 `}
      >
        <DayDetails data={data} />
      </div>
      <div className="absolute w-full bottom-0 translate-y-1/2 flex justify-evenly gap-1 rounded-lg">
        {weeksForecast.map((day, index) => {
          if (index > 0) {
            return <WeekDay key={index} day={day} />;
          }
        })}
      </div>
    </div>
  );
};

export default TodayCard;
