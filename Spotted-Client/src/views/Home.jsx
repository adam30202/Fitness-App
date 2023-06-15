import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App"

const Home = () => {

  const user = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="about-text-container">
      <h1 className="text-center dark:text-white">Welcome to Spotted!</h1>
      <br/>
      <p className="about-text">An app that shifts the focus from self-indulgence to sharing captivating moments of others and the world around us. Say goodbye to selfie-centered platforms and embrace a community that cherishes the experiences of people and things beyond ourselves.</p>
      <br/>
      <p className="about-text">With Spotted, discover a vibrant tapestry of stories and connections. Immerse yourself in stunning landscapes, cultural wonders, and heartfelt interactions captured by passionate individuals across the globe.
      </p>
      <br/>
      <button 
        type="button" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-bg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          user ? navigate("/post-spotted") :
          navigate("/sign-up")
        }}
      >
        Make your first post now!
      </button>
    </div>
  );
}

export default Home;