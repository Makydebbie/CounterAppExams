import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./assets/styles/index.css";
import ErrorBoundary from "./errorHandler/ErrorBoundary";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
        <ErrorBoundary>
        <App />
        </ErrorBoundary>
        </BrowserRouter>
    </StrictMode>,
    rootElement
);
