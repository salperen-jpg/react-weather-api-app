import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { query, error, setQuery } = useGlobalContext();
  const container = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    container.current.focus();
  }, []);

  return (
    <div className='search-form'>
      <form action='' className='my-form' onSubmit={submitHandler}>
        <input
          type='text'
          ref={container}
          value={query}
          placeholder='Search for city or country'
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {error.show && <div className='error'>{error.msg}</div>}
    </div>
  );
};

export default SearchForm;
