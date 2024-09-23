import { useState } from "react";
import "./App.css";
import Header from "./Header";
import data from "./data";
import Card from "./Card";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        title={item.title}
        location={item.location}
        mapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imgUrl={item.imageUrl}
      />
    );
  });

  return (
    <div>
      <Header />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
