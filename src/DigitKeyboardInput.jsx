import { useState, useEffect } from "react";

import { characters } from "./dataBase";

const DigitKeyboardInput = () => {
  const [text, setText] = useState("");
  const [firstDigit, setFirstDigit] = useState(0);
  const [secondDigit, setSecondDigit] = useState(0);

  const handleClick = (event) => {
    const newDigit = event.target.value;

    if (!firstDigit) {
      setFirstDigit(newDigit);
    } else if (!secondDigit) {
      setSecondDigit(newDigit);
    } else {
      return;
    }
  };

  useEffect(() => {
    setText(text + characters[firstDigit][secondDigit]);
  }, [secondDigit]);

  return (
    <>
      <p>{text}</p>
      <p>
        {firstDigit}
        {secondDigit}
      </p>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => {
        return (
          <button key={digit} value={digit}>
            {digit}
          </button>
        );
      })}
    </>
  );
};

export { DigitKeyboardInput };
