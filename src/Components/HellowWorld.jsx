import React from "react";

const HellowWorld = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React component.</p>
      <p>
        In this component, we have declared a function called "HellowWorld"
        which returns a JSX element. The JSX element includes a heading (h1) and
        a paragraph.
      </p>
      <p>
        The text "Hello, World!" is displayed in the heading, and the text "This
        is a simple React component." is displayed in the paragraph.
      </p>
      <p>
        The component is also wrapped in a div with a class name of "container",
        which is used for styling purposes.
      </p>
      <p>
        The component is exported as default, which means it can be imported and
        used in other parts of your React application.
      </p>
    </div>
  );
};

export default HellowWorld;
