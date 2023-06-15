import { useState, useEffect } from "react";
import Form from '../components/Form';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const EditPost = () => {

    const [ post, setPost ] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    //// Retrieves info of post to be edited
    useEffect(() => {
        //// retrieves post ID from query and cuts off '?' at the beginning
        const postId = location.search.split('').splice(1).join('');
        axios
            .get("http://localhost:3000/edit-spotted", {
                params: { id: postId }
            })
            .then((response) => {
                setPost(response.data[0]);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    //// Submits edited post
    const submitEditPost = (formData) => {
        console.log(formData)
        const configuration = {
            method: 'put',
            url: 'http://localhost:3000/edit-spotted',
            data: formData,
            params: { id: post._id }
        }

        axios(configuration)
            .then((result) => {
                console.log(result);
                navigate('/myposts');
            })
            .catch((error) => {
                console.error(`An error occured: ${error}`)
            });
    }   

    return (
    <div>
        <h1 className="view-title">Edit Post</h1>
        <Form post={ post } submitPost={ submitEditPost }/>
    </div>
    );
}

export default EditPost;