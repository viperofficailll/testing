import React from "react";
import Maincontent from "./components/maincontent/Maincontent";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

// Optionally, define types for props if needed
const App: React.FC = () => {
  return (
    <div className="app-container">
      <Topbar />
      <div className="display-flex">
      <Sidebar />
      <Maincontent />
      </div>
     
    </div>
  );
};

export default App;
