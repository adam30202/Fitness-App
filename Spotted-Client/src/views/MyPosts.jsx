import DisplayedPost from "../components/DisplayedPost";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import Cookies from "universal-cookie";

const MyPosts = () => {

    const user = useContext(UserContext);
    const [ posts, setPosts ] = useState([]);
    const [ requestComplete, setRequestComplete] = useState(false);

    useEffect(() => {
        if (!user) return
        axios
            .get("http://localhost:3000/myposts", {
                params: { author: user }
            })
            .then((response) => {
                // Sorts posts in from newest to oldest
                const sortedPosts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setPosts(sortedPosts);
                setRequestComplete(true)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [user]);

    ///// Deletes a post
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
            <h1 className="view-title dark:text-white">My Posts</h1>
            
            {requestComplete && (
                posts.length !== 0 ? (
                    posts.map((post) => <DisplayedPost post={ post } deletePost={ deletePost }key={ post._id }/> )
             ) : (
                <h3 className="nothing-to-show dark:text-white">No posts to show</h3>
             )
            )}
        </div>
    );
}

export default MyPosts;