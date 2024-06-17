// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import DashboardContainer from "./pages/DashboardContainer";
import AllBillboard from "./pages/AllBilboard";
// import AllBillboard from "./pages/AllBillboard";
import './index.css'
import Sidebar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-8">
        <Routes>
          <Route path="/overview" element={<DashboardContainer />} />
          <Route path="/all-billboard" element={<AllBillboard />} />
          {/* Add additional routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App
