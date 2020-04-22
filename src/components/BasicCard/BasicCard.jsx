import React from 'react';
import './basicCard.css';

function BasicCard(props) {
  return (
    <div className="card">
      <ul className="_infoContainer">
        <li className="_skillName">{props.name}</li>
        <li><img src={props.image } alt="" /></li>
        <li className="_skillType">{props.type}</li>
        <li className="_skillDescription">{props.text}</li>
      </ul>
    </div>
  );
}

export default BasicCard;
