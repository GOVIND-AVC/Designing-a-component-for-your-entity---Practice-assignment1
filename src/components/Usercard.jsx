/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Usercard = ({ name, profilephoto, mail, phone, address }) => {
  return (
    <div>
      <img src={profilephoto} alt={name} />
      <h1>{name}</h1>
      <h3>{mail}</h3>
      <h5>{phone}</h5>
      <span>{address}</span>
    </div>
  );
};

export default Usercard;
