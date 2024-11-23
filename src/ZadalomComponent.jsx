import { useState, useEffect } from "react";

import {
  zadalomLetters,
  zadalomCyrillicLetters,
  upperCaseLatinLetters,
  upperCaseCyrillicLetters,
} from "./dataBase";

const ZadalomComponent = () => {
  const [initialText, setInitialText] = useState("");
  const [zadalomText, setZadalomText] = useState("");

  const handleChange = (event) => {
    setInitialText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const initialTextArray = initialText.split("");

    const zadalomCyrillicLettersArray = initialTextArray.map(
      (cyrillicLetter) => {
        return zadalomCyrillicLetters[cyrillicLetter] || cyrillicLetter;
      }
    );

    const zadalomLettersArray = zadalomCyrillicLettersArray
      .join("")
      .split("")
      .map((zadalomCyrillicLetter) => {
        return zadalomLetters[zadalomCyrillicLetter] || zadalomCyrillicLetter;
      });

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
