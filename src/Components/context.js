import React, { useContext, useState, useEffect } from 'react';

//  ` https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_ACCESS_KEY}`
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  let newObject;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const fetchWeather = async (query) => {
    setIsLoading(true);
    try {
      const respone = await fetch(
        ` https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_ACCESS_KEY}`
      );
      const data = await respone.json();

      if (data.cod === '404') {
        setError({ show: true, msg: data.message });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError({ show: false, msg: '' });
        setWeather(data);
        console.log(data);
        const {
          main: { temp },
        } = weather;
        console.log(temp);
        const {
          sys: { country },
        } = weather;
        const { name } = weather;
        const { timezone } = weather;
        const {
          wind: { speed },
        } = weather;

        newObject = {
          name,
          country,
          temp,
          timezone,
          speed,
        };
        console.log(name, country, temp, timezone, speed);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWeather(query);
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
