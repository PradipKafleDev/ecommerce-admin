import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./components/pages/home/Home";

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        {/* sidebar */}
        <Sidebar />
        {/* Homepage */}
        <Home />
      </div>
    </div>
  );
};

export default App;
