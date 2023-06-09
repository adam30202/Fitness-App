
import { Link } from "react-router-dom";

const DisplayedPost = ({ post }) => {

    // const _handleEdit = ({ key }) => {
    //     axios
    //         .put("http://localhost:3000/myposts", {
    //             params: { id: key }
    //         })
    //         .
    // }
    
    return (
        <div className="post-frame">
            <div className="image-container">
                <img src={ post.image } className="post-image"/>
            </div>
            <p className="post-text">Category: { post.category }</p>
            <p className="post-text">{ post.likeCount } Likes</p>
            <p className="post-text">Caption: { post.caption }</p>
            <Link to={{pathname: "/edit-spotted", query: { id: post._id }}}>Edit Spotted</Link>
        </div>
    );
}

export default DisplayedPost;