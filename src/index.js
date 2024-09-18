import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(<StrictMode>Hello!</StrictMode>);
