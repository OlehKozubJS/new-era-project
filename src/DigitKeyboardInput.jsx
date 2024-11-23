import { useState, useEffect } from "react";

import { characters } from "./dataBase";

const DigitKeyboardInput = () => {
  const [text, setText] = useState("");
  const [isFirstDigit, setIsFirstDigit] = useState(true);
  const [firstDigit, setFirstDigit] = useState(0);
  const [secondDigit, setSecondDigit] = useState(0);

  const handleClick = (event) => {
    const newDigit = Number(event.target.value);

    if (isFirstDigit) {
      setFirstDigit(newDigit);
      setIsFirstDigit(false);
    } else {
      setSecondDigit(newDigit);
      setIsFirstDigit(true);
    }
  };

  useEffect(() => {
    if (isFirstDigit) {
      setText(text + characters[firstDigit][secondDigit]);
    }
  }, [isFirstDigit]);

  return (
    <>
      <p>{text}</p>
      <p>
        {firstDigit}
        {secondDigit}
      </p>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => {
        return (
          <button key={digit} value={digit} onClick={handleClick}>
            {digit}
          </button>
        );
      })}
    </>
  );
};

export { DigitKeyboardInput };
