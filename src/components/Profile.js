import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import  Axios  from 'axios';



const Profile = () => {
  const { user, isAuthenticated } = useAuth0();


  // const handleClick = () => {
  //   navigate('/home')
  // }

  const getData = () => {
    Axios.get("http://localhost:1337/").then(
    (response) => 
    {
      console.log(response);}   
 );
};
  return (
    isAuthenticated && ( 
     <div>
        <img src={user.picture} alt={user.name} />
        <h2>Welcome, {user.name}!</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />
        {/* {JSON.stringify(user, null, 2)} */}
        <button onClick = {getData}>Get data</button>

      </div>
    )
  )
}

export default Profile
