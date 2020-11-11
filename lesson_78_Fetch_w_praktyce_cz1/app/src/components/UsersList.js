import React from "react";

const UsersList = (props) => {
  console.log(props.users);
  const users = props.users.map((user) => (
    <div key={user.login.uuid}>
      <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
      <p>-----</p>
  <p>{user.location.city}/{user.location.country}</p>
  <p>{user.location.street.name} No. {user.location.street.number}</p>
      <p>{user.email}</p>
    </div>
  ));
  return <ul>{users}</ul>;
};

export default UsersList;
