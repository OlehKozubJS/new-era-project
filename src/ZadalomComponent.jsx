import { useState, useEffect } from "react";

import { zadalomLetters, zadalomCyrillicLetters } from "./dataBase";

const ZadalomComponent = () => {
  const [initialText, setInitialText] = useState("");
  const [zedelomText, setZedelomText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleChange} />
        <button type="submit"></button>
      </form>
      <p></p>
    </div>
  );
};

export { ZadalomComponent };
