import React from "react";
import { AiFillDelete } from 'react-icons/ai';

function Post(props) {
  return (
    <div className="post">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button><AiFillDelete size={25}/></button>
    </div>
  );
}

export default Post;
