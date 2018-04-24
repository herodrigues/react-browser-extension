import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";

import AppContainer from "./AppContainer";
import AppCSS from "./App.css";

import store from "./store";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "dispatch") {
    store.dispatch(request.data);
  }
  sendResponse({ data: request.data })
});

document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    const container = document.createElement("div");
    container.id = "app-container";
    container.style = "box-shadow:initial;position:fixed;overflow:initial;right:0;top:0;bottom:initial;padding:initial;float:right;z-index:2147483647";
    document.body.appendChild(container);

    const shadowRoot = container.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(AppCSS));

    render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
      shadowRoot, function () {
        shadowRoot.appendChild(style);
      }
    );
  }
};
