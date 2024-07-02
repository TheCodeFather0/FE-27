import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Detail = () => {
  const [userData, setUserData] = useState({});
  let { id } = useParams();
  id = id.split("-")[0];

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users/" + id).then(
      ({ data }) => {
        setUserData(data);
      }
    );
  }, []);
  return (
    <div>
      <h2>{userData.name}</h2>
      <h2>{userData.username}</h2>
      <h2>{userData.email}</h2>
    </div>
  );
};

export default Detail;
