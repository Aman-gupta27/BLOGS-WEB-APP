import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <MantineProvider withGlobalClasses withCssVariables>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>
);
