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

	convertedCells() {
		let years = this.props.commendedYearsToConvert;
		return years.map((year, index) => {
			return (
				<td key={index}>{this.props.convertedCommendedCutoffs[year]}</td>
			);
		});
	}

	render() {
		return (
			<div>
				//<h4>3. Determine whether you'll be commended</h4>
				<table>
					<tbody>
						<tr><th></th><th colSpan="7">Old PSAT</th><th>New PSAT</th></tr>
						<tr><td>Class of</td>{this.yearHeadings()}</tr>
						<tr><td>Commended Selection Index Cutoff</td>{this.scoreCells()}</tr>
						<tr><td>Converted Cutoff*</td>{this.convertedCells()}<td>-</td></tr>
					</tbody>
				</table>
				<p>*Because the Old PSAT and the new PSAT are different exams with different scales, they're hard to compare. However, we can reasonably estimate the new cutoffs from the old ones by using the official College Board <a href="https://collegereadiness.collegeboard.org/pdf/psat-nmsqt-preliminary-concordance-tables-2015.pdf">concordance tables</a>. 
				Just keep in mind that these are just estimates. We continually adjust our algorithm as more data becomes available.
				</p>
			</div>
		);
	}
}

