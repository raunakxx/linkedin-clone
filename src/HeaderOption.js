import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, icon: Icon, title, onClick }) {
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <img src={avatar} alt="Avatar" className="headerOption__avatar" />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
