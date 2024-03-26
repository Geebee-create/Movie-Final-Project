import "./Login.css";
import { Login } from "./Login";
import { Register } from "./Register";
import React from "react";

function Log() {
  const [currentForm, setCurrentForm] = React.useState("login");
  const toggleForm = (forName) => {
    setCurrentForm(forName);
  };
  return (
    <div className="Log">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default Log;
