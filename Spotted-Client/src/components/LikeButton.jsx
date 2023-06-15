import axios from "axios"
import { Link } from 'react-router-dom';
import { useState, useContext } from "react";
import { UserContext } from "../App";

const LikeButton = ({ postId, setLikes, heart, setHeart }) => {

    const user = useContext(UserContext);
    const [loading, setLoading] = useState(false);


    const _handleLike = () => {

        /// Ensures that a user cannot spam the like button and send multiple requests to the server before a response.
        if (loading) return; 
        setLoading(true);

        /// Sends the postId and userId to the server to remove or add a like from a post.
        axios.put('http://localhost:3000/like', {id: postId, userId: user})
        .then(result => {
            setLikes(result.data.likeCount); /// Changes likes on frontend to match new like count in database.
            if (result.data.likes.includes(user)) { /// If the likes array (which holds userIds of users who liked the post) includes the user, then the heart icon will change.
                setHeart('♥')
            } else {
                setHeart('♡')
            }
        })
        .catch((error) => {
            console.error(`An error occured: ${error}`)
        })
        .finally(() => {
            setLoading(false);
        });
    }

    return (
        <div>
            <Link className="like-heart" onClick={ _handleLike }> {  heart  } </Link>
        </div>
    )
}

export default LikeButton;