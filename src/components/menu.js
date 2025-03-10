import React from "react";


const Menu = ({ items }) => {
  return (
    <div className="menu">
      {items.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={item.image} alt={item.name} className="menu-image" />
          <h2>{item.title}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
