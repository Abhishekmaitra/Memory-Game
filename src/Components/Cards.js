import React, { useState } from "react";
import Card from "./Card";
import Images from "../Images.json";
function Cards() {
  const [items, setItems] = useState(() =>
    Images.sort(() => Math.random() - 0.5)
  );

  const [prevId, setPrevId] = useState(-1);

  //clickCard Function //
  function clickCard(id) {
    if (prevId === -1) {
      setPrevId(id);
      items[id].status = "active";
      setItems([...items]);
    } else checkCurrId(id);
  }

  //checkCurrId Fucntion//
  function checkCurrId(currId) {
    if (items[currId].id === items[prevId].id) {
      items[currId].status = "right";
      items[prevId].status = "right";
      setItems([...items]);
      setPrevId(-1);
    } else {
      items[currId].status = "wrong";
      items[prevId].status = "wrong";
      setItems([...items]);
      setPrevId(-1);
      setTimeout(() => {
        items[currId].status = "";
        items[prevId].status = "";
        setItems([...items]);
      }, 1000);
    }
  }

  return items.map((item, index) => (
    <Card key={index} item={item} id={index} clickCard={clickCard} />
  ));
}

export default Cards;
