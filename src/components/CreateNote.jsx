import React, { useState } from "react";

function CreateNote(props) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setText((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.onAdd(text);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={text.title}
          onChange={handleChange}
          placeHolder="Topic..."
        ></input>
        <textarea
          name="content"
          value={text.content}
          onChange={handleChange}
          placeHolder="Take a short note..."
          rows="3"
        ></textarea>
        <button onClick={handleClick} >+</button>
      </form>
    </div>
  );
}

export default CreateNote;
