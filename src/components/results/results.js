import React from "react";

import { prettyPrintJson } from "pretty-print-json";

import "./results.scss";

function Results(props) {
  function renderResults() {
    const element = document.getElementById("account");
    element.innerHTML = prettyPrintJson.toHtml(props.data);
  }
  return (
    <section>
      <pre id="account" className="json-container">
        {props.data ? renderResults() : null}
      </pre>
    </section>
  );
}

export default Results;
