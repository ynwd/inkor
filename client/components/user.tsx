import React, { useState, useEffect } from "react";

export type User = {
  username: string;
  id: string;
};

const Users = ({
  users,
  handleOnChange,
}: {
  users: User[];
  handleOnChange: any;
}) => {
  return (
    <>
      Users
      <ul className="list-group">
        {users.map((item, index) => (
          <li key={index} className="list-group-item">
            <input
              className="form-check-input me-1"
              type="radio"
              name="userList"
              value={item.username}
              id={item.id}
              onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor={item.id}>
              {item.username}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export { Users };
