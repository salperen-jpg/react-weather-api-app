import React, { useContext, useState, useEffect } from 'react';

// const END_POINT = ` https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${REACT_APP_ACCESS_KEY}`;

// 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('Spain');

  const fetchWeather = async (query) => {
    const respone = await fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_ACCESS_KEY}`
    );
    const data = await respone.json();
    console.log(data);
  };

  useEffect(() => {
    fetchWeather(query);
  }, [query]);
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
