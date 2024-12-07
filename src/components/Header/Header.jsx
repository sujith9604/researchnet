import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = false; 

  const handleNavigation = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="h-[10vh]">
      <nav className="w-full h-full flex gap-4 p-4 bg-gray-200 items-center justify-between">
        <div className="flex gap-4">
          <NavLink to="/">Home</NavLink>
          <button onClick={() => handleNavigation('/page1')}>Page1</button>
          <button onClick={() => handleNavigation('/page2')}>Page2</button>
          <button onClick={() => handleNavigation('/page3')}>Page3</button>
        </div>

        {!isAuthenticated && (
          <button
            onClick={() => navigate('/login')}
            className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
          >
            Login
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
