import React from "react";

export default class SelectState extends React.Component {
	options() {
		return this.props.listOfStates.map((state, index) => {
			return <option key={index} value={state}>{state}</option>;
		});
	}

	render() {
		return (
			<div>
			<h4>1. Select your state</h4>
			<select onChange={this.props.handleOnChange} value={this.props.chosenState}>
				{this.options()}
			</select>
			</div>
		);
	}
}