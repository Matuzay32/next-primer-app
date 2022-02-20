import React from "react";
import Router from "next/router";

const funcionParaEnrutarSegunElId = (id) => {
  console.log(id);

  Router.push(`/users/${id}`);
};

export default function Users({ users }) {
  return (
    <ul className="list-group">
      {users.map((user) => {
        return (
          <li
            className="list-group-item list-group-item-action d-flex justify-content-between aling-items-center"
            onClick={(e) => funcionParaEnrutarSegunElId(user.id)}
            key={user.id}>
            <div>
              <h5>{`${user.first_name}    ${user.last_name}`}</h5>

              <p>Email : {user.email}</p>
            </div>

            <img
              style={{ borderRadius: "50%" }}
              src={user.avatar}
              alt={`${user.first_name}    ${user.last_name}`}
            />
          </li>
        );
      })}
    </ul>
  );
}
