import React, { useEffect, useState, useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import Form from "./Form";
import { valueFromAST } from "graphql";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }

    setUpdate(false);
  }, [data, update, setUpdate]);

  return (
    <div>
      <Form setUpdate={setUpdate} />
      {users
        .slice(-10)
        .reverse()
        .map((val) => {
          return <li key={val.id}>{val.firstName}</li>;
        })}
    </div>
  );
}

export default GetUsers;
