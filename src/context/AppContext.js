import axios from 'axios';
import { createContext, useState } from 'react';
import {API_KEY} from '../api/config';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  const handleChange = (event) => setInputValue(event.target.value);
  const handleSubmit = (event, history) => {
    event.preventDefault();
    if(inputValue.trim() !== '') {
      history.push(`/search/${inputValue}`);
      setInputValue('');
    }
  }

  const getImages = (tags) => {
    setIsLoading(true);

    axios
    .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
      if(response.status === 200) {
        setImages(response.data.photos.photo);
        setIsLoading(false);
      } else throw Error('Something went wrong');
    })
    .catch((error) => {
      console.log(error.message);
    })
  }


  return (
    <AppContext.Provider value={{
      inputValue,
      handleChange,
      handleSubmit,
      isLoading,
      images,
      getImages
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;