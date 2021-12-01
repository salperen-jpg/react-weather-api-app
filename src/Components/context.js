import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  let newObject;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [query, setQuery] = useState('Antalya');
  const [weather, setWeather] = useState({});

  const fetchWeather = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);

      const data = await response.json();

      if (data.cod === 404) {
        setError({ show: true, msg: data.message });
        console.log(data);
        // throw new Error('Bad response from server');
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError({ show: false, msg: '' });
        setWeather(data);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWeather(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_ACCESS_KEY}`
    );
  }, [query]);
  return (
    <AppContext.Provider
      value={{ query, setQuery, isLoading, error, weather, newObject }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
