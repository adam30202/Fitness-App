import { useState, useContext } from "react";
import { UserContext } from "../App";

const Home = () => {

  const user = useContext(UserContext)
  

  return (
    <div>
      <h1 className="text-center">About</h1>
    </div>
  );
}

export default Home;