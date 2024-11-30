import React from "react";

const HellowWorld = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a React component.</p>
      <button onClick={() => alert("Button clicked!")}>Click Me!</button>
      <input type="text" placeholder="Enter your name" />
      <p>Welcome, {localStorage.getItem("name")}!</p>
    </div>
  );
};

export default HellowWorld;
