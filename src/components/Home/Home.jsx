import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageHori from '../../../assets/backgroundImageHorizontal.webp';
import ImageVerti from '../../../assets/backgroundImageVertical.webp';

const Home = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth >= 1081) {
        setImage(ImageHori);
      } else {
        setImage(ImageVerti);
      }
    };

    updateImage();

    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, []);

  return (
    <div
      className="min-h-[80vh] flex flex-col justify-center items-center bg-gray-100 py-8"
      style={{ backgroundImage: `url(${image})` }}
    >

    </div>
  )
}

export default Home;