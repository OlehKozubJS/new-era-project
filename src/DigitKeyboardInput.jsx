import { useState, useEffect } from "react";

import { characters } from "./dataBase";
import { handleKeyDown } from "./hooks";

const DigitKeyboardInput = () => {
  const [text, setText] = useState("");
  const [numberString, setNumberString] = useState("");

  const handleDigit = (event) => {
    const digitCharacter = event.target.value ?? event.key;

    numberString += digitCharacter;
  };

  useEffect(handleKeyDown(handleDigit), [isFirstDigit]);

  useEffect(() => {
    if (isFirstDigit) {
      if (number === "91") {
        let textArray = text.split("");
        textArray.splice(textArray.length - 1, 1);
        const diminishedText = textArray.join("");

        setText(diminishedText);
      } else {
        const firstDigit = Number(numberString[1]);
        const secondDigit = Number(numberString[2]);
        setText(text + characters[firstDigit][secondDigit]);
      }
    }
  }, [isFirstDigit]);

  return (
    <>
      <p>{text}</p>
      <p>
        {firstDigit}
        {secondDigit}
      </p>
      <p>{isFirstDigit && "First digit"}</p>
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
