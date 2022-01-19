import React from 'react';
import { useGlobalContext } from './context';
import moment from 'moment';

const Weather = () => {
  const { weather, isLoading, error } = useGlobalContext();

  if (isLoading) {
    return (
      <div className='container'>
        <div className='loading'></div>
      </div>
    );
  }
  if (error.show) {
    return (
      <div className='weather'>
        <h1>{error.msg}</h1>
      </div>
    );
  }

  return (
    <>
      {weather.name ? (
        <article className='weather'>
          <div className='temp'>
            <h1>{Math.floor(weather.main.temp)}°C</h1>
          </div>
          <div className='location'>
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
          </div>
          {/* <h3>{moment(today).format('dddd MMMM do')}</h3>
          <h3>{moment(today).format('h:mm')}</h3> */}
          <h1>{moment().format('dddd MMMM do')}</h1>
          <h3>{moment().format('h:mm')}</h3>
          <p>
            <span className='attribute'>Timezone : </span>
            <span>{weather.timezone}</span>
          </p>
          <p>
            <span className='attribute'>Wind Speed : </span>
            <span>{weather.wind.speed}</span>
          </p>
        </article>
      ) : (
        ''
      )}
    </>
  );
};

export default Weather;
