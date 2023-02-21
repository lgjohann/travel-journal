import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./assets/data";

export default function App() {
  const cards = data.map((value) => {
    return <Card 
      key={value.id} 
      {...value} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section>{cards}</section>
    </div>
  );
}
