import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <MantineProvider withGlobalClasses withCssVariables>
      <App />
  </MantineProvider>
);
