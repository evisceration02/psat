import React from "react";

export default class CommendedCutoffs extends React.Component {
	constructor(props) {
		super(props);
		this.years = Object.keys(this.props.commendedCutoffs);
	}

	yearHeadings() {
		return this.years.map((year, index) => {
			return (
				<td key={index}>{year}</td>
			);
		});
	}

	scoreCells() {
		return this.years.map((year, index) => {
			return (
				<td key={index}>{this.props.commendedCutoffs[year]}</td>
			);
		});
	}

	render() {
		return (
			<div>
				//<h4>3. Determine whether you'll be commended</h4>
				<table>
					<tbody>
						<tr><th colSpan={this.years.length}>Old PSAT</th><th>New PSAT</th></tr>
						<tr><td>Class of</td>{this.yearHeadings()}</tr>
						<tr><td>Commended Selection Index Cutoff</td>{this.scoreCells()}</tr>
						<tr><td>Converted Cutoff*</td></tr>
					</tbody>
				</table>
				*We converted the Old PSAT cutoffs to match the scale of the New PSAT by using the official College Board <a href="https://collegereadiness.collegeboard.org/pdf/psat-nmsqt-preliminary-concordance-tables-2015.pdf">concordance tables</a>.
			</div>
		);
	}
}

