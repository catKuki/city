import React, { useState } from "react";
import Header from "./components/Header/Header";
import City from "./components/City/City";
import "./App.css";
export default function App() {
  const [page, setPage] = useState("home"); 
  const [selectedLocation, setSelectedLocation] = useState(null);

  const goHome = () => {
    setPage("home");
    setSelectedLocation(null);
  };
  const goList = () => setPage("list");
  const goDetail = (loc) => {
    setSelectedLocation(loc);
    setPage("detail");
  };

  return (
    <div>
      <Header onHome={goHome} onList={goList} />
      <main style={{ padding: "20px" }}>
        <City
          page={page}
          onShowList={goList}
          onSelectDetail={goDetail}
          onBack={goList}
          selectedLocation={selectedLocation}
        />
      </main>
    </div>
  );
}