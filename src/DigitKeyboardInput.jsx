import { useState, useEffect } from "react";

import { characters } from "./dataBase";

const DigitKeyboardInput = () => {
  return (
    <>
      <p></p>
      {[0].forEach((item, index, array) => {
        return <button>{item}</button>;
      })}
    </>
  );
};

export { DigitKeyboardInput };
