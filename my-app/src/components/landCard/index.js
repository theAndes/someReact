import React from "react";
import "./style.css";

function landCard(props) {
  return (
    <div className="card" key={props.id}>
      <img
        className="img-thumbnail"
        alt={props.name}
        src={props.image}
        value={props.id}
        selected={props.selected}
        onClick={() => props.selectedLand(props.id)} />
    </div>

  );
}

export default landCard;
