import React, { useContext } from 'react';
import {AppContext} from '../context/AppContext';
import Image from '../components/Image';
import NoImages from '../components/NoImages';
import Loader from './Loader';

import '../styles/ImageList.css';

const ImageList = () => {
  const {isLoading, images} = useContext(AppContext);

  const imagesComponents = images.map((image) => {
    const {farm, server, id, secret, title} = image;
    const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

    return <Image url={url} alt={title} key={id}/>
  });

  const imagesResult = imagesComponents.length > 0 ? imagesComponents : <NoImages/>

  if(isLoading) return <Loader/>
  else return (
    <section className="list">
      {imagesResult}
    </section>
  );
};

export default ImageList;