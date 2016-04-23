import React from "react";

export default class SelectState extends React.Component {
	options() {
		return this.props.listOfStates.map((state, index) => {
			return <option key={index} value={state}>{state}</option>;
		});
	}

	render() {
		return (
			<select onChange={this.props.handleOnChange} value={this.props.chosenState}>
				{this.options()}
			</select>
		);
	}
}