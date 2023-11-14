import React, { useState, useEffect } from "react";

export default function userTable({ data }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
