import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRows from "../Dashboard/UserRows";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://secure-beach-13890.herokuapp.com/user").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>All Users:{users.length} </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Admin Power</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRows key={user._id} user={user} refetch={refetch}></UserRows>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
