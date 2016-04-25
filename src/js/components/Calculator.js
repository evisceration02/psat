import React from "react";
import SelectState from "./SelectState";
import SelectionIndex from "./SelectionIndex";
import CommendedCutoffs from "./CommendedCutoffs"
import SemifinalistCutoffs from "./SemifinalistCutoffs";

export default class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.listOfStates = this.listOfStates();
		let [ firstState ] = this.listOfStates;
		this.state = {
			chosenState: firstState
		};
		this.commendedYearsToConvert = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
		this.semifinalistYearsToConvert = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
	}

	listOfStates() {
		return Object.keys(this.props.stateCutoffs).sort();
	}

	handleOnChange(e) {
		this.setState({
			chosenState: e.target.value
		});
	}

	convertedCommendedCutoffs() {
		return this.commendedYearsToConvert.reduce((scores, year) => {
			scores[year] = this.props.concordance[this.props.commendedCutoffs[year]];
			return scores;
		}, {});
	}

	convertedSemifinalistCutoffs(chosenStateCutoffs) {
		return this.semifinalistYearsToConvert.reduce((scores, year) => {
			scores[year] = this.props.concordance[chosenStateCutoffs[year]];
			return scores;
		}, {});
	}

	baseCommendedCutoff() {
		// finds the base commended selection index cutoff, last year's cutoff for now
		let allYears = Object.keys(this.props.commendedCutoffs);
		let lastYear = allYears[allYears.length - 1];
		return this.props.commendedCutoffs[lastYear];
	}

	calculateProjection(convertedCommendedCutoffs, convertedSemifinalistCutoffs, chosenStateCutoffs) {

		// copy inputted objects so we don't mutate the originals
		let convertedCommendedCutoffsCopy = Object.assign({}, convertedCommendedCutoffs);
		let convertedSemifinalistCutoffsCopy = Object.assign({}, convertedSemifinalistCutoffs);

		let yearsForProjection = Object.keys(chosenStateCutoffs).slice(-1 * this.props.yearsForProjection);

		// Accounts for years after 2016
		yearsForProjection.forEach((year) => {
			if (parseInt(year) > 2016) {
				convertedSemifinalistCutoffsCopy[year] = chosenStateCutoffs[year];
				convertedCommendedCutoffsCopy[year] = this.props.commendedCutoffs[year];
			}
		});

		let differences = yearsForProjection.map((year) => {
			return (convertedSemifinalistCutoffsCopy[year] - convertedCommendedCutoffsCopy[year]) - 1;
		});

		var sumOfDifferences = differences.reduce((sum, currentValue) => {
			return sum + currentValue;
		}, 0);

		return Math.round(sumOfDifferences / differences.length) + this.baseCommendedCutoff();
	}

	render() {
		let chosenStateCutoffs = this.props.stateCutoffs[this.state.chosenState];
		let convertedCommendedCutoffs = this.convertedCommendedCutoffs();
		let convertedSemifinalistCutoffs = this.convertedSemifinalistCutoffs(chosenStateCutoffs);
		let projection = this.calculateProjection(convertedCommendedCutoffs, convertedSemifinalistCutoffs, chosenStateCutoffs);
		return (
			<div>
				<SelectState
					chosenState={this.state.chosenState}
					listOfStates={this.listOfStates}
					handleOnChange={this.handleOnChange.bind(this)} />
				<SelectionIndex />
				<CommendedCutoffs
					commendedCutoffs={this.props.commendedCutoffs}
					convertedCommendedCutoffs={convertedCommendedCutoffs} />
				<SemifinalistCutoffs
					cutoffsByYear={chosenStateCutoffs}
					convertedSemifinalistCutoffs={convertedSemifinalistCutoffs}
					projection={projection}
					semifinalistYearsToConvert={this.semifinalistYearsToConvert}/>
			</div>
		);
	}
}