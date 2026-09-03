import React from "react";
import { Logo } from "./Logo";
import "./App.css";

export const App: React.FC = () => (
  <div className="popup-container">
    <div className="popup-header">
      <div className="spinning-logo">
        <Logo />
        </div>
        <h1 className="popup-title">Welcome to React</h1>
    </div>
    <p className="popup-intro">
      To get started, edit <code>src/App.js</code> and reload the extension.
    </p>
  </div>
);