import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [showMore, setShowMore] = useState(false);

  return (
    <AppContext.Provider value={{ city, setCity, showMore, setShowMore }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
