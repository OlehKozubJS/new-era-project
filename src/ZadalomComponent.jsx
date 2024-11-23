import { useState, useEffect } from "react";

const ZadalomComponent = () => {
  const handleSubmit = (event) => {};

  const handleChange = (event) => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleChange} />
        <button type="submit"></button>
      </form>
      <p></p>
    </div>
  );
};

export { ZadalomComponent };
