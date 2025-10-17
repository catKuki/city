import React from "react";
import "./Header.css";

export default function Header({ onHome, onList }) {
  return (
    <header>
      <div className="logo" onClick={onHome}>
        TravelWarsaw
      </div>

      <nav>
        <button onClick={onHome}>Home</button>
        <button onClick={onList}>Locations</button>
      </nav>

      <div className="city-tag">📍 Warsaw</div>
    </header>
  );
}