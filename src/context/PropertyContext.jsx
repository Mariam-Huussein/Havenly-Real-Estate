import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProperties } from "../../data";

const PropertyContext = createContext();

export const PropertyContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);

  const getProperties = () => {
    setProperties(dummyProperties);
  };

  useEffect(() => {
    getProperties();
  }, []);

  const value = {
    navigate,
    properties,
  };
  return <PropertyContext.Provider value={value}>{children}</PropertyContext.Provider>;
};

export const usePropertyContext = () => useContext(PropertyContext);