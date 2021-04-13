import React, { useContext, useEffect } from 'react';
import ImageList from '../components/ImageList';
import { AppContext } from '../context/AppContext';

import '../styles/Main.css';

const Main = ({searchValue}) => {

  const { getImages, images } = useContext(AppContext);

  useEffect(() => {
    getImages(searchValue);
  }, [searchValue]);

  const upperFirst = (queryString) => {
    if(queryString.trim() !== '') {
      const queryArray = queryString.split(' ');
      let formattedQueryString = [];
      queryArray.forEach((string) => {
        const letter = string[0].toUpperCase();
        const formattedString = `${letter}${string.slice(1)}`;
        formattedQueryString.push(formattedString);
      });

      return formattedQueryString.join(' ');
    }
  }

  const statComponent = images.length > 0 
  ? <p className="main__stat">Results: {images.length}</p> : null;

  return (
    <div className='main'>
      <h2 className='main__title'>
       {upperFirst(searchValue)}
        {/* <span>Images</span> */}
      </h2>
      {statComponent}
      <ImageList/>
    </div>
  );
};

export default Main;