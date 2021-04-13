import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Image.css';

const Image = ({ url, alt }) => {
  const [isValid, setIsValid] = useState(true);
  
  useEffect(() => {
    axios
    .get(url)
    .then((response) => {
      
    })
    .catch((error) => {
      setIsValid(false);
      console.log(error.message);
    })
  }, []);

  const imageComponent = isValid ? <img src={url} alt={alt}/> : <p>:(</p>

  return (
    <div className="image">
      {imageComponent}
    </div>
  );
}

export default Image;