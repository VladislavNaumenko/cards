import React, { useState } from "react";
import './App.css';
import Card from "./Card";

const schema = [
  {
    id: "0",
    title: "Audi",
    img: "audi",
  },
  {
    id: "1",
    title: "Lamborghini",
    img: "lamba",
  },
  {
    id: "2",
    title: "Bugatti",
    img: "bugatti",
  },
  {
    id: "3",
    title: "BMW",
    img: "bmw",
  },
  {
    id: "4",
    title: "Mercedes",
    img: "mercedes",
  },
];
const App = () => {
  const [selected, setSelected] = useState("0");
  return (
    <div className="container">
      {schema.map(item => (
          <Card
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.img}
              isActive={selected === item.id}
              callBack={setSelected}/>
              )
      )}
    </div>
  );
};

export default App;
