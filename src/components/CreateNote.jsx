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
    setText({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={text.title}
          onChange={handleChange}
          placeholder="Topic..."
        ></input>
        <textarea
          name="content"
          value={text.content}
          onChange={handleChange}
          placeholder="Take a short note..."
          rows="3"
        ></textarea>
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}

export default CreateNote;
