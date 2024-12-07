import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageHori from '../../../assets/backgroundImageHorizontal.webp';
import ImageVerti from '../../../assets/backgroundImageVertical.webp';

const Login = () => {
  const [image, setImage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
      <p className="w-full max-w-sm py-4 text-2xl font-semibold text-white text-center bg-gray-500 rounded-tl-lg rounded-tr-lg">
        Login Page
      </p>
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-500">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleOnChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleOnChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <button className="h-[6vh] w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
          Log In
        </button>
        <p className="w-full py-2 text-center">
          Don't have an account?&nbsp;
          <Link to="/register" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
