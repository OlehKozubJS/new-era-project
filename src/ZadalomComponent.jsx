import { useState, useEffect } from "react";

import {
  zadalomLetters,
  zadalomCyrillicLetters,
  upperCaseLatinLetters,
  upperCaseCyrillicLetters,
  characters,
} from "./dataBase";

const ZadalomComponent = () => {
  const [initialText, setInitialText] = useState("");
  const [zadalomText, setZadalomText] = useState("");

  const handleChange = (event) => {
    setInitialText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const initialTextArray = initialText.split("").map((initialCharacter) => {
      return {
        character: initialCharacter.toLowerCase(),
        isLetter: !Object.keys(zadalomCyrillicLetters).includes(cyrillicLetter),
        isUpperCase: upperCaseCyrillicLetters.includes(initialCharacter),
      };
    });

    const zadalomCyrillicLettersArray = initialTextArray.map(
      (cyrillicLetter) => {
        if (cyrillicLetter.isLetter) {
          return cyrillicLetter;
        }

        const isUpperCase = upperCaseCyrillicLetters.includes(cyrillicLetter);

        const zadalomCyrillicLetter =
          zadalomCyrillicLetters[cyrillicLetter.toLowerCase()];

        if (isUpperCase) {
          return zadalomCyrillicLetter.toUpperCase();
        }
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
