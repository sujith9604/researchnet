import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageHori from '../../../assets/backgroundImageHorizontal.webp';
import ImageVerti from '../../../assets/backgroundImageVertical.webp';

const Register = () => {
  const [image, setImage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    affiliation: '',
    designation: '',
    researchInterests: '',
    phone: '',
    linkedin: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

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

  
  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <div
      className="min-h-[80vh] flex flex-col justify-center items-center bg-gray-100 py-8"
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className="w-full max-w-sm py-4 text-2xl font-semibold text-white text-center bg-gray-500 p-4 rounded-tl-lg rounded-tr-lg mt-12">
        Register Page
      </p>
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md space-y-6">
        {currentStep === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your Full Name"
                value={formData.name}
                onChange={handleOnChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
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
            <div>
              <label className="block text-sm font-medium text-gray-500">Confirm Password</label>
              <input
                name="repeatPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.repeatPassword}
                onChange={handleOnChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              onClick={nextStep}
              className="h-[6vh] w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Next
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">Affiliation/Organization</label>
              <input
                name="affiliation"
                type="text"
                placeholder="Enter your organization"
                value={formData.affiliation}
                onChange={handleOnChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Designation/Role</label>
              <input
                name="designation"
                type="text"
                placeholder="Enter your designation"
                value={formData.designation}
                onChange={handleOnChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Research Interests</label>
              <input
                name="researchInterests"
                type="text"
                placeholder="Enter your research interests"
                value={formData.researchInterests}
                onChange={handleOnChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              onClick={prevStep}
              className="h-[6vh] w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              className="h-[6vh] w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Next
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">Phone Number (Optional)</label>
              <input
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleOnChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">LinkedIn or Personal Website (Optional)</label>
              <input
                name="linkedin"
                type="url"
                placeholder="Enter your LinkedIn or personal website"
                value={formData.linkedin}
                onChange={handleOnChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              onClick={prevStep}
              className="h-[6vh] w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Previous
            </button>
            <button
              className="h-[6vh] w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
