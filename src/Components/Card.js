import React from "react";
function Card({ item, clickCard, id }) {
  const itemClass = item.status ? "active " + item.status : "";

  return (
    <div className={`card ${itemClass}`} onClick={() => clickCard(id)}>
      <img src={item.url} alt="" />
    </div>
  );
}
export default Card;
