import { useState } from "react";

import { RangeField, RangeDial, RangeIndicator } from "./style";

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <h2>Progress Always Wins!</h2>
      <p>I am back.</p>

      <div className={RangeField}>
        <div className={RangeDial}></div>
      </div>
      <p className={RangeIndicator}>0</p>
    </>
  );
};

export { App };
