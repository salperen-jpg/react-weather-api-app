import React from 'react';
import { useGlobalContext } from './context';
import moment from 'moment';

const Weather = () => {
  const { weather, isLoading, newObject } = useGlobalContext();

  if (isLoading) {
    return (
      <div className='container'>
        <div className='loading'></div>
      </div>
    );
  }

  let today = new Date();

  return (
    <>
      {weather ? (
        <article className='weather'>
          <div className='temp'>
            <h1></h1>
          </div>
          <div className='location'>
            <h2>Stockholm, SE</h2>
          </div>
          <h3>{moment(today).format('dddd MMMM do')}</h3>
          <h3>{moment(today).format('h:mm')}</h3>
          <p>
            <span className='attribute'>Timezone : </span>
            <span>Number</span>
          </p>
          <p>
            <span className='attribute'>Wind Speed : </span>
            <span>Number</span>
          </p>
        </article>
      ) : (
        <h2>askldjsak</h2>
      )}
    </>
  );
};

export default Weather;
