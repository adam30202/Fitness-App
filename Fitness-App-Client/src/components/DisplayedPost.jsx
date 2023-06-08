
const DisplayedPost = ({ post }) => {
    
    return (
        <div className="post-frame">
            <div className="image-container">
                <img src={ post.image } className="post-image"/>
            </div>
            <p className="post-text">Category: { post.category }</p>
            <p className="post-text">{ post.likeCount } Likes</p>
            <p className="post-text">Caption: { post.caption }</p>
        </div>
    );
}

export default DisplayedPost;