import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

import { ReducerComponent } from "./ultimateRedux";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <StrictMode>
    <ReducerComponent>
      <App />
    </ReducerComponent>
  </StrictMode>
);
