import React from "react";
import { useState } from "react";
import "./form.scss";

function Form(props) {
  const [currentMethod, setCurrentMethod] = useState("GET");
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  function handleChange(e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      method: currentMethod,
      url: url,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={handleChange} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span
            className={currentMethod === "GET" ? "active" : ""}
            onClick={() => setCurrentMethod("GET")}
            id="get"
          >
            GET
          </span>
          <span
            className={currentMethod === "POST" ? "active" : ""}
            onClick={() => setCurrentMethod("POST")}
            id="post"
          >
            POST
          </span>
          <span
            className={currentMethod === "PUT" ? "active" : ""}
            onClick={() => setCurrentMethod("PUT")}
            id="put"
          >
            PUT
          </span>
          <span
            className={currentMethod === "DELETE" ? "active" : ""}
            onClick={() => setCurrentMethod("DELETE")}
            id="delete"
          >
            DELETE
          </span>
        </label>
      </form>
    </>
  );
}

export default Form;
