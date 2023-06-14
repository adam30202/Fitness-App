import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../App";
import 'bootstrap/dist/css/bootstrap.min.css'

const DisplayedPost = ({ post, deletePost }) => {

    const [ likes, setLikes ] = useState(post.likeCount);
    const [ heart, setHeart ] = useState('')
    const user = useContext(UserContext);

    useEffect(() => {
        if (post.likes.includes(user)) {
            setHeart('♥')
        } else {
            setHeart('♡')
        }
    }, []);

    const _handleDelete = () => {
        deletePost(post._id)
    }

    return (
        <div className="post-frame">
            <div className="image-container">
                <img src={ post.image } className="post-image"/>
            </div>
            <LikeButton postId={ post._id } setLikes={ setLikes } heart={ heart } setHeart={ setHeart }/>
            <p className="post-text">{ likes } Likes</p>
            <p className="post-text">{ post.caption }</p>
            <p className="post-text">Category: { post.category }</p>
            
            { post.author === user &&
            <div>
            <Link to={{pathname: "/edit-spotted", search: post._id }}>Edit Spotted</Link>
            <Link onClick={ _handleDelete }>Delete Spotted</Link>
            </div>
            }

        </div>
    );
}

export default DisplayedPost;