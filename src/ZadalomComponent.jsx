import { useState, useEffect } from "react";

import { zadalomLetters, zadalomCyrillicLetters } from "./dataBase";

const ZadalomComponent = () => {
  const [initialText, setInitialText] = useState("");
  const [zadalomText, setZadalomText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setInitialText(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="initialTextInput"></label>
        <textarea
          id="initialTextInput"
          name="initialTextInput"
          placeholder="Enter Cyrillic text"
          onChange={handleChange}
        />
        <button type="submit">Zadalomize</button>
      </form>
      <p></p>
    </div>
  );
};

export { ZadalomComponent };
