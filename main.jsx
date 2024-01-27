import { createRoot } from "react-dom/client";
import React from "react";
import App from "./src/App";
import "./src/index.css"
import { FiltersProvider } from "./src/context/filters.jsx";

const root = createRoot(document.getElementById('root'))

root.render(
    <FiltersProvider>
        <App />
    </FiltersProvider>
)