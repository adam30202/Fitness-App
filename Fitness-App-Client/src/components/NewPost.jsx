import React from "react";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import Form from './Form';
const cookies = new Cookies();

const NewPost = () => {

  return (
    <div>
      <h1>New Post</h1>

        <Form />
    </div>
  );
}

export default NewPost;