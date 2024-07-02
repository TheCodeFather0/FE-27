import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        users.map(({ id, username, name }) => {
          const url = "/users/" + id + "-" + name.replaceAll(" ", "-");
          return (
            <div className="card" key={id}>
              <Link to={url} target="_blank"></Link>
              {id + " " + username}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Users;
