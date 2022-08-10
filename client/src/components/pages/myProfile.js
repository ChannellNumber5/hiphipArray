import  React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from "../../utils/queries";

export default function Profile() {
  const [user, setUser] = useState("");
  const { data, loading } = useQuery(QUERY_ME);
  console.log("data: ", {data});

  useEffect(() => {
    if (data) {
    setUser(data.me);
    }
  }, [!loading]);
    
  return (
    <div>
      {user ? ( 
        <>
      <h1>{user.username}'s Profile</h1>
      <h2>Your Skills</h2>
      {user.skills.map((skill) => (
        <div key={skill._id}>
          <h3>{skill._id}</h3>
        </div>
      ))}
      </>
      ): 
      <div> Loading... </div>}
    </div>
  );
}
