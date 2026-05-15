import React from "./deps/react.js?v=6842b218";
import ReactDOMClient from "./deps/react-dom_client.js?v=112f398e";
const { createRoot } = ReactDOMClient;
import App from "./final.js";
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null))
);
