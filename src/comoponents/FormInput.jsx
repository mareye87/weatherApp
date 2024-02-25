import React from "react";
import { useGlobalContext } from "../context";

const FormInput = () => {
  const { setCity } = useGlobalContext();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setCity(searchValue);
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="flex justify-between items-center my-4  bg-transparent  rounded-3xl w-full overflow-hidden p-1 border-cyan-500 border-2 relative"
    >
      <input
        type="search"
        name="search"
        placeholder="Enter a City"
        className="w-3/4 bg-transparent px-4 rounded-2xl outline-none font-semibold text-slate-100 "
      />
      <button className=" bg-cyan-500 rounded-full uppercase text-sm text-slate-100 font-semibold p-1 hover:bg-cyan-700 transition duration-150  ">
        go
      </button>
    </form>
  );
};

export default FormInput;
