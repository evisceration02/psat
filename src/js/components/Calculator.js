import React from "react";
import SelectState from "./SelectState";
import ResultsTable from "./ResultsTable";

export default class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.listOfStates = this.listOfStates();
		let [ firstState ] = this.listOfStates;
		this.state = {
			chosenState: firstState
		};
	}

	listOfStates() {
		return Object.keys(this.props.stateCutoffs).sort();
	}

	handleOnChange(e) {
		this.setState({
			chosenState: e.target.value
		});
	}

	render() {
		let cutoffsByYear = this.props.stateCutoffs[this.state.chosenState];
		return (
			<div>
				<SelectState
					chosenState={this.state.chosenState}
					listOfStates={this.listOfStates}
					handleOnChange={this.handleOnChange.bind(this)} />
				<ResultsTable cutoffsByYear={cutoffsByYear} />
			</div>
		);
	}
}