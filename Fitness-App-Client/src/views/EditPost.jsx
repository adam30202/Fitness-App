import React from "react";
import Form from '../components/Form';
import { useLocation } from 'react-router-dom';


const EditPost = () => {

    
    const location = useLocation();
    const query = new URLSearchParams(location);
    const theQuery = query.get('id')
    console.log(theQuery)

    
    return (
    <div>
        <h1>Edit Post</h1>
        <Form />
    </div>
    );
}

export default EditPost;