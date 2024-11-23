import { useState, useEffect } from "react";

import { characters } from "./dataBase";
import { handleKeyDown } from "./hooks";

const DigitKeyboardInput = () => {
  const [text, setText] = useState("");
  const [numberString, setNumberString] = useState("");

  const handleDigit = (event) => {
    const newDigit = event.target.value ?? event.key;

    if (isFirstDigit) {
      setFirstDigit(newDigit);
      setIsFirstDigit(false);
    } else {
      setSecondDigit(newDigit);
      setIsFirstDigit(true);
    }
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
        const number = Number(numberString);
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
