import React from "react";
import "./City.css";

import stareMiastoWarszawa from "./img/stare-miasto-warszawa.png";
import lazienki from "./img/lazenki.png";
import palacKultury from "./img/plac.png";
import kopernik from "./img/koneser.png";
import wilanow from "./img/wilanow.png";

const LOCATIONS = [
  {
    id: "1",
    title: "Stare Miasto",
    excerpt: "The historic heart of Warsaw.",
    description:
      "Stare Miasto is the oldest part of Warsaw, beautifully reconstructed after World War II, filled with colorful facades, cobblestone streets, and the Royal Castle.",
    image: stareMiastoWarszawa,
  },
  {
    id: "2",
    title: "Łazienki Królewskie",
    excerpt: "A royal park with art and nature.",
    description:
      "Łazienki Królewskie is a peaceful oasis in the city — home to the Palace on the Isle, peacocks, Chopin’s monument, and charming lakeside walks.",
    image: lazienki,
  },
  {
    id: "3",
    title: "Pałac Kultury i Nauki",
    excerpt: "An iconic skyscraper and symbol of Warsaw.",
    description:
      "Built in the 1950s, the Palace of Culture and Science is a landmark offering panoramic city views, theaters, and museums.",
    image: palacKultury,
  },
  {
    id: "4",
    title: "Centrum Praskie Koneser",
    excerpt: "A vibrant center of modern placemaking.",
    description:
      "Centrum Praskie Koneser is a revitalized post-industrial area combining art, design, business, and culture — a true icon of modern Warsaw’s spirit.",
    image: kopernik,
  },
  {
    id: "5",
    title: "Pałac w Wilanowie",
    excerpt: "A baroque masterpiece of Polish royalty.",
    description:
      "The Wilanów Palace was the residence of King Jan III Sobieski — a stunning example of baroque architecture surrounded by elegant gardens.",
    image: wilanow,
  },
];

export default function City({
  page,
  onShowList,
  onSelectDetail,
  onBack,
  selectedLocation,
}) {
  if (page === "home") {
    return (
      <div className="city-container fade">
        <h1>Welcome to Warsaw!</h1>
        <p>
          Discover the capital of Poland — a city where history, art, and modern
          culture meet in harmony.
        </p>
        <button onClick={onShowList}>Explore Locations</button>
      </div>
    );
  }

  if (page === "list") {
    return (
      <div className="city-container fade">
        <h2>Top Places to Visit in Warsaw</h2>
        <ul className="city-list">
          {LOCATIONS.map((loc) => (
            <li key={loc.id} className="city-list-item">
              {loc.image && (
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="city-thumb"
                />
              )}
              <h3>{loc.title}</h3>
              <p>{loc.excerpt}</p>
              <button onClick={() => onSelectDetail(loc)}>View Details</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (page === "detail" && selectedLocation) {
    return (
      <div className="city-container fade city-detail">
        <h2>{selectedLocation.title}</h2>

        <div className="city-image">
          {selectedLocation.image ? (
            <img
              src={selectedLocation.image}
              alt={selectedLocation.title}
              className="location-photo"
            />
          ) : (
            <span>No image available</span>
          )}
        </div>

        <p>{selectedLocation.description}</p>
        <button onClick={onBack}>← Back</button>
      </div>
    );
  }

  return null;
}