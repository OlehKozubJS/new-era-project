import { useState, useEffect } from "react";

import { characters } from "./dataBase";
import { handleKeyDown } from "./hooks";

const DigitKeyboardInput = () => {
  const [text, setText] = useState("");
  const [numberString, setNumberString] = useState("");

  const handleDigit = (event) => {
    const digitCharacter = event.target.value ?? event.key;

    setNumberString(numberString + digitCharacter);
  };

  useEffect(handleKeyDown(handleDigit), [numberString]);

  useEffect(() => {
    if (numberString.length === 2) {
      if (numberString === "91") {
        let textArray = text.split("");
        textArray.splice(textArray.length - 1, 1);
        const diminishedText = textArray.join("");

        setText(diminishedText);
      } else {
        const firstDigit = Number(numberString[0]);
        const secondDigit = Number(numberString[1]);
        setText(text + characters[firstDigit][secondDigit]);
      }

      setNumberString("");
    }
  }, [numberString]);

  return (
    <>
      <p>{text}</p>
      <p>{numberString}</p>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => {
        return (
          <button key={digit} value={digit} onClick={handleDigit}>
            {digit}
          </button>
        );
      })}
    </>
  );
};

export { DigitKeyboardInput };
