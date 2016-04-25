import React from "react";

export default class CommendedCutoffs extends React.Component {
	constructor(props) {
		super(props);
		this.years = Object.keys(this.props.commendedCutoffs);
	}

	yearHeadings() {
		return this.years.map((year, index) => {
			return (
				<td className="center" key={index}>{year}</td>
			);
		});
	}

	scoreCells() {
		return this.years.map((year, index) => {
			return (
				<td className="center" key={index}>{this.props.commendedCutoffs[year]}</td>
			);
		});
	}

	convertedCells() {
		return this.years.map((year, index) => {
			return (
				<td className="center" key={index}>{this.props.convertedCommendedCutoffs[year] || '-'}</td>
			);
		});
	}

	render() {
		return (
			<div>
				<h4>3. Determine whether you'll be commended</h4>
				<p>The cutoff for the class of 2017 is <b>209</b>. If you meet or exceed this index, you'll receive a Letter of Commendation at the very least.</p>
				<p>Unlike the semifinalist cutoffs, the commended cutoff is nationwide and does not vary by state.</p>
				<p>Out of 1.5 million entrants, only 50,000 are considered high scorers, from which only 34,000 are commended.</p>
				<table className="table table-bordered table-condensed">
					<tbody>
						<tr><th></th><th colSpan="7">Old PSAT</th><th>New PSAT</th></tr>
						<tr><td>Class of</td>{this.yearHeadings()}</tr>
						<tr><td>Commended SI Cutoff</td>{this.scoreCells()}</tr>
						<tr><td>Converted Cutoff*</td>{this.convertedCells()}</tr>
					</tbody>
				</table>
				<p>*Because the Old PSAT and the new PSAT are different exams with different scales, they're hard to compare. However, we can reasonably estimate the new cutoffs from the old ones by using the official College Board <a target="_blank" href="https://collegereadiness.collegeboard.org/pdf/psat-nmsqt-preliminary-concordance-tables-2015.pdf">concordance tables</a>. 
				Just keep in mind that these are just estimates. We continually adjust our algorithm as more data becomes available.
				</p>
				<hr />
			</div>
		);
	}
}

