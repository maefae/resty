import React from "react";
import { useState, useEffect } from "react";
import "./app.scss";
import axios from "axios";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Results from "./components/results/results";

//setData updates data (like a counter)
function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  useEffect(() => {
    callApi(requestParams);
  }, [requestParams]);

  async function callApi(config) {
    const response = await axios(config);

    setData(response.data);
    // setRequestParams(config);
    //params are whatever is being passed through
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form setRequestParams={setRequestParams} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         { name: "fake thing 1", url: "http://fakethings.com/1" },
//         { name: "fake thing 2", url: "http://fakethings.com/2" },
//       ],
//     };
//     this.setState({ data, requestParams });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

export default App;
