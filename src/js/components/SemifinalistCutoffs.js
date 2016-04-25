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
				<td className="center" key={index}>{year}</td>
			);
		});
	}

	scoreCells() {
		return this.years.map((year, index) => {
			return (
				<td className="center" key={index}>{this.props.cutoffsByYear[year]}</td>
			);
		});
	}

	convertedCells() {
		let years = this.props.semifinalistYearsToConvert;
		return years.map((year, index) => {
			return (
				<td className="center" key={index}>{this.props.convertedSemifinalistCutoffs[year]}</td>
			);
		});
	}

	render() {
		return (
			<div>
				<h4>4. Determine whether you'll be a Semifinalist</h4>
				<p>You'll find out whether you qualify as a semifinalist in late September.</p>
				<p>Only 16,000 of the 34,000 commended students make it to this step.
				Once you're a semifinalist, your score is good enough for a $2,500 scholarship, but you still have to make it through the finalist round. The selection process at this point depends on other criteria. Full details can be found on the <a target="_blank" href="http://www.nationalmerit.org/">official site.</a></p>
				<table className="table table-bordered table-condensed">
					<tbody>
						<tr><th></th><th colSpan="9">Old PSAT</th><th>New PSAT</th></tr>
						<tr><td>Class of</td>{this.yearHeadings()}</tr>
						<tr><td>Semifinalist SI Cutoff</td>{this.scoreCells()}<td className="center">Projected: <b>{this.props.projection}</b></td></tr>
						<tr><td>Converted Cutoff*</td>{this.convertedCells()}<td className="center">-</td></tr>
					</tbody>
				</table>
			</div>
		);
	}
}

