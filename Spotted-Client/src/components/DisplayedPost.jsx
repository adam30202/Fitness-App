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
            <div className="post-headings">
                <p className="post-text">By <span className="italic">{ post.username }</span></p>
                <p className="post-location">Spotted in <span className="italic">{ post.location }</span></p> 
            </div>
            <div className="image-container">
                <img src={ post.image } className="post-image"/>
            </div>

            <LikeButton postId={ post._id } setLikes={ setLikes } heart={ heart } setHeart={ setHeart }/>
            <p className="post-text">{ likes } Likes</p>
            
            <p className="post-text">{ post.caption }</p>
            <p className="post-text">#{ post.category }</p>

            { post.author === user &&
                <div className="links-container">
                    <Link to={{pathname: "/edit-spotted", search: post._id }}>Edit</Link>
                    <Link 
                    onClick={() => { if (window.confirm('Are you sure you wish to delete this item?') ) return _handleDelete() }}
                    
                   >
                        
                        
                        Delete</Link>
                </div>
            }

        </div>
    );
}

export default DisplayedPost;