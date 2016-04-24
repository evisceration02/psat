import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./components/Calculator";
import { commendedCutoffs, stateCutoffs } from "./cutoffs";

const app = document.getElementById('app');

ReactDOM.render(<Calculator commendedCutoffs={commendedCutoffs} stateCutoffs={stateCutoffs} />, app);