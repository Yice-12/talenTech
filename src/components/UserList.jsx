import React from "react";
import { UserCard } from "./UserCard";

export const UserList = ({ dataList }) => {
  return (
    <div className="row">
      {dataList?.map((user, i) => (
        <UserCard key={i} user={user} />
      ))}
    </div>
  );
};
