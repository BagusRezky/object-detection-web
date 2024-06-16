// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import DashboardContainer from "./components/DashboardContainer";
import './index.css'
import Sidebar from "./components/SideBar";


function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-8">
        <DashboardContainer />
      </div>
    </div>
  );
}

export default App
