import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TrueContext from "../context/TrueContext.jsx";

// eslint-disable-next-line react/prop-types
const TrueProvider = ({ children }) => {
  const [isTrue, setIsTrue] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("Checking is true code?");
  }, [location]);

  return (
    <TrueContext.Provider value={{ isTrue, setIsTrue }}>
      {children}
    </TrueContext.Provider>
  );
};

export default TrueProvider;
