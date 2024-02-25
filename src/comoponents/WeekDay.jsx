const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeekDay = ({ day }) => {
  const temp = day?.day?.avgtemp_c;
  const icon = day?.day?.condition?.icon;
  const date = new Date(day?.date);
  const dayOfWeek = date.getDay();

  return (
    <div className="flex flex-col items-center justify-between w-1/5 text-center py-1 px-3 rounded-2xl bg-[rgba(255,255,255,0.3)] shadow-md">
      <h3 className="mb-1 text-sm">{days[dayOfWeek]}</h3>
      <img src={icon} alt="condition-icon" className="w-10 -mt-2" />
      <h3 className="text-sm">{temp}&deg; C</h3>
    </div>
  );
};

export default WeekDay;
