import React from "react";

export const UserCard = ({ user }) => {
  const { name, email, phone, userName } = user;

  return (
    <div className="col-3">
      <h3>{name}</h3>
      <div>
        <span>{email}</span>
        <span>{phone}</span>
        <span>{userName}</span>
      </div>
    </div>
  );
};
