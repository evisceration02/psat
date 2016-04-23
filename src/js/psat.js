import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./components/Calculator";
import stateCutoffs from "./cutoffs";

const app = document.getElementById('app');

ReactDOM.render(<Calculator stateCutoffs={stateCutoffs} />, app);