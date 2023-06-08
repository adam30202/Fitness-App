import DisplayedPost from "../components/DisplayedPost";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const MyPosts = () => {

    const [ posts, setPosts ] = useState([]);

    const cookies = new Cookies();
    const token = cookies.get("TOKEN")
    const payloadBase64Url = token.split('.')[1];
    const decodedPayload = JSON.parse(window.atob(payloadBase64Url));
    const userId = decodedPayload.userId

    useEffect(() => {
        axios
            .get("http://localhost:3000/myposts", {
                params: { author: userId }
            })
            .then((response) => {
                // Sorts posts in from newest to oldest
                const sortedPosts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setPosts(sortedPosts);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);  

    return (
        <div className="container">
            { posts && (posts.map((post) => <DisplayedPost post={ post } key={ post._id }/> ))}
        </div>
    );
}

export default MyPosts;