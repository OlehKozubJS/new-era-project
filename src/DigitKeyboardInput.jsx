import { useState, useEffect } from "react";

import { characters } from "./dataBase";

const DigitKeyboardInput = () => {
  const [firstDigit, setFirstDigit] = useState(0);
  const [secondDigit, setSecondDigit] = useState(0);

  const handleClick = (event) => {};

  return (
    <>
      <p></p>
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
