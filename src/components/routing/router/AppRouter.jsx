import React from 'react'
import { Navigate, Routes, Route } from "react-router";
import Sidebar from '../../includes/Sidebar'
import About from '../../screens/About';
import Gallery from '../../screens/Gallery';
import Service from '../../screens/Service';

const AppRouter = () => {
    console.log("In App Router");
  return (
      <div>
          <Sidebar />
          <Routes>
              <Route path="/" element={<Navigate to="accolades/about/" />} />
              <Route path="/accolades/about/" element={<About />} />
              <Route path="/accolades/service/" element={<Service />} />
              <Route path="/accolades/gallery/" element={<Gallery />} />
          </Routes>
      </div>
  );
}

export default AppRouter