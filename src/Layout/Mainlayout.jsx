import React, { useState } from 'react';  // Import useState from React
import Header from '../Header';
import Sidebar from '../Sidebar';
  

const Mainlayout = ({ children }) => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      
      <div>{children}</div>

    </div>
  );
};

export default Mainlayout;
