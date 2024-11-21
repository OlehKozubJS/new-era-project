import { useState, useEffect } from "react";

import { characters } from "./dataBase";

const DigitKeyboardInput = () => {
  return (
    <>
      <p></p>
      {[0].map((item, index, array) => {
        if (item < array.length - 1) {
          array.push(item + 1);
        }
        return <button key={index}>{item}</button>;
      })}
    </>
  );
};

export { DigitKeyboardInput };
