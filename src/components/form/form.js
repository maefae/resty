import React from "react";
import { useState } from "react";
import "./form.scss";

function Form(props) {
  const [currentMethod, setCurrentMethod] = useState("GET");
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [payload, setPayload] = useState({});

  function handleURLChange(e) {
    setUrl(e.target.value);
  }

  function handleTextChange(e) {
    setPayload(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      method: currentMethod,
      url: url,
    };

    if (currentMethod === "PUT" || currentMethod === "POST") {
      formData.payload = payload;
    }

    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={handleURLChange} />
          <button type="submit">GO!</button>
        </label>

        {(currentMethod === "PUT" || currentMethod === "POST") && (
          <textarea onChange={handleTextChange}></textarea>
        )}

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
