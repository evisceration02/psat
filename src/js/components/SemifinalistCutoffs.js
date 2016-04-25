import React from "react";

export default class SemifinalistCutoffs extends React.Component {
	constructor(props) {
		super(props);
		this.years = Object.keys(this.props.cutoffsByYear);
	}

	yearHeadings() {
		let currentYear = parseInt(this.years[this.years.length - 1]) + 1;
		return this.years.concat(currentYear).map((year, index) => {
			return (
				<td key={index}>{year}</td>
			);
		});
	}

	scoreCells() {
		return this.years.map((year, index) => {
			return (
				<td key={index}>{this.props.cutoffsByYear[year]}</td>
			);
		});
	}

	convertedCells() {
		let years = this.props.semifinalistYearsToConvert;
		return years.map((year, index) => {
			return (
				<td key={index}>{this.props.convertedSemifinalistCutoffs[year]}</td>
			);
		});
	}

	render() {
		return (
			<div>
				//<h4>4. Determine whether you'll be a Semifinalist</h4>

				<table>
					<tbody>
						<tr><th></th><th colSpan="9">Old PSAT</th><th>New PSAT</th></tr>
						<tr><td>Class of</td>{this.yearHeadings()}</tr>
						<tr><td>Semifinalist Selection Index Cutoff</td>{this.scoreCells()}<td>Projected: {this.props.projection}</td></tr>
						<tr><td>Converted Cutoff*</td>{this.convertedCells()}</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

