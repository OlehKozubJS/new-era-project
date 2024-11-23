import { useState, useEffect } from "react";

import { zadalomLetters, zadalomCyrillicLetters } from "./dataBase";

const ZadalomComponent = () => {
  const [initialText, setInitialText] = useState("");
  const [zadalomText, setZadalomText] = useState("");

  const handleChange = (event) => {
    setInitialText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const initialTextArray = initialText.toLowerCase().split("");
    const zadalomCyrillicLettersArray = initialTextArray.map(
      (cyrillicLetter) => {
        return zadalomCyrillicLetters[cyrillicLetter];
      }
    );
    const zadalomLettersArray = zadalomCyrillicLettersArray.map(
      (zadalomCyrillicLetter) => {
        return zadalomLetters[zadalomCyrillicLetter];
      }
    );
    const newZadalomText = zadalomLettersArray.join("");
    setZadalomText(newZadalomText);
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
          value={initialText}
        />
        <button type="submit">Zadalomize</button>
      </form>
      <p>{zadalomText}</p>
    </div>
  );
};

export { ZadalomComponent };
