import { useState, useContext } from "react";
import { UserContext } from "../App";

const Home = () => {

  const user = useContext(UserContext)
  

  return (
    <div>
      <h1 className="text-center dark:text-white">Home</h1>
      <p className="about-text">Welcome to Spotted!

      An app that shifts the focus from self-indulgence to sharing captivating moments of others and the world around us. Say goodbye to selfie-centered platforms and embrace a community that cherishes the experiences of people and things beyond ourselves.

      With Spotted, discover a vibrant tapestry of stories and connections. Immerse yourself in stunning landscapes, cultural wonders, and heartfelt interactions captured by passionate individuals across the globe.
      </p>
    </div>
  );
}

export default Home;