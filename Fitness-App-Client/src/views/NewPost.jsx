import React from "react";
import Form from '../components/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const NewPost = () => {

  const navigate = useNavigate();

  const submitNewPost = (formData) => {
    const configuration = {
      method: 'post',
      url: 'http://localhost:3000/new-post',
      data: formData
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
      <h1 className="view-title">New Post</h1>
        <Form submitPost={ submitNewPost }/>
    </div>
  );
}

export default NewPost;