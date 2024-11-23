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

  const transformText = (text, transformationKey) => {
    const initialTextArray = text.split("").map((initialCharacter) => {
      return {
        character: initialCharacter.toLowerCase(),
        isLetter: Object.keys(transformationKey).includes(
          initialCharacter.toLowerCase()
        ),
        isUpperCase:
          upperCaseCyrillicLetters.includes(initialCharacter) ||
          upperCaseLatinLetters.includes(initialCharacter),
      };
    });

    const transformedTextArray = initialTextArray.map(
      ({ character, isLetter, isUpperCase }) => {
        if (!isLetter) {
          return character;
        }

        const newLetter = transformationKey[character];

        if (isUpperCase) {
          return newLetter.replace(newLetter[0], newLetter[0].toUpperCase());
        } else {
          return newLetter;
        }
      }
    );

    return transformedTextArray.join("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const zadalomCyrillicText = transformText(
      initialText,
      zadalomCyrillicLetters
    );

    const zadalomText = transformText(zadalomCyrillicText, zadalomLetters);

    setZadalomText(zadalomText);
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
