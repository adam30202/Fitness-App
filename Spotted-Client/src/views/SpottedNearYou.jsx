import DisplayedPost from "../components/DisplayedPost";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import GeoLocation from "../components/GeoLocation";
import LoadingSpinner from "../components/LoadingSpinner";

const SpottedNearYou = () => {
 
    const user = useContext(UserContext);
    const [ posts, setPosts ] = useState([]);
    const [ location, setLocation ] = useState('');

    useEffect(() => {
        if (!location) return
        axios
            .get("http://localhost:3000/spotted-near-you", {
                params: { location: location }
            })
            .then((response) => {
                // Sorts posts in from newest to oldest
                const sortedPosts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setPosts(sortedPosts);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [location]);

    const deletePost = (postId) => {
        axios.delete('http://localhost:3000/myposts' + postId )
        .then((result) => {
            console.log("Post: " + postId + " deleted")
            ///// Changes state to reflect change in database
            setPosts(posts.filter(post => post._id !== postId))
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return (
        <div className="container">
            <GeoLocation setLocation={ setLocation }/>
            <h1 className="view-title dark:text-white">Spotted in
                { location ? (
                    <span> { location }</span>
                ) : (
                    <span>
                    ... <LoadingSpinner />
                    </span>
                )}
            </h1>
            { posts && (posts.map((post) => <DisplayedPost post={ post } deletePost={ deletePost }key={ post._id }/> ))}
        </div>
    )
}
 
export default SpottedNearYou;