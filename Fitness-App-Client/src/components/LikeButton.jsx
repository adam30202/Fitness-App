import axios from "axios"
import { Link } from 'react-router-dom';
import { useState, useContext } from "react";
import { UserContext } from "../App";

const LikeButton = ({ postId, setLikes, heart, setHeart }) => {

    const user = useContext(UserContext);
    const [loading, setLoading] = useState(false);


    const _handleLike = () => {

        if (loading) return;
        setLoading(true);

        axios.put('http://localhost:3000/like', {id: postId, userId: user})
        .then(result => {
            setLikes(result.data.likeCount);
            if (result.data.likes.includes(user)) {
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