import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./components/Calculator";
import { concordance, commendedCutoffs, stateCutoffs } from "./cutoffs";

const app = document.getElementById('app');

// Years from which to base cutoff score projection, maximum of 7
const YEARS_FOR_PROJECTION = 7;

ReactDOM.render(
	<Calculator concordance={concordance}
							commendedCutoffs={commendedCutoffs}
							stateCutoffs={stateCutoffs}
							yearsForProjection={YEARS_FOR_PROJECTION} />, app);


// TODO: Allow for Commended projection score?