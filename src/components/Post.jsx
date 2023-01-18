import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Post(props) {
  function handleClick() {
    props.onCheck(props.id);
  }

  return (
    <div className="post">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <AiFillDelete size={25} />
      </button>
    </div>
  );
}

export default Post;
