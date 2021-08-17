import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import AdminHome from "./pages/AdminHome"
import "./admin.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <AdminHome />
      </div>
    </div>
  );
}

export default App;
