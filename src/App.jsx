import FormInput from "./comoponents/FormInput";
import { useState } from "react";
import TodayCard from "./comoponents/TodayCard";
import { useGlobalContext } from "./context";

const App = () => {
  const { city } = useGlobalContext();

  const welcome = (
    <div className="text-center mt-12 ">
      <h1 className="text-4xl text-yellow-400 mb-6 font-semibold">Welcome</h1>
      <h3 className="text-xl sm:text-2xl text-white">
        Check weather for your city...
      </h3>
    </div>
  );

  return (
    <main className="p-2 sm:p-8 mb-24 max-w-xl mx-auto sm:pt-2">
      <FormInput />
      {city ? <TodayCard /> : welcome}
    </main>
  );
};

export default App;
