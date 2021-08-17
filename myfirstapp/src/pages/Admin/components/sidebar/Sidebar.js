import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="headerSidbar">
        <h3>Tableau de board</h3>
      </div>


      <div className="levelSidbar">
        <h3>Utilisateurs</h3>
      </div>
      <div className="levelSidbar">
        <h3>Cours</h3>
      </div>
      <div className="levelSidbar">
        <h3>Message</h3>
      </div>

      

    </div>
  );
}