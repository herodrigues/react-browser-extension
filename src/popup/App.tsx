import React from "react";
import { Logo } from "./Logo";
import "./App.css";

export const App: React.FC = () => (
  <div className="popup-container">
    <header className="popup-header">
      <Logo size={48} />
      <h1 className="popup-title">Welcome to React</h1>
    </header>
    <p className="popup-intro">
      To get started, edit <code>src/App.js</code> and reload the extension.
    </p>
  </div>
);