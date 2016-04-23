import React from "react";

export default class ResultsTable extends React.Component {
	tableRows() {
		let rows = [];
		Object.keys(this.props.cutoffsByYear).forEach((year, index) => {
			let score = this.props.cutoffsByYear[year];
			rows.push(<tr key={index} className="warning"><td>{year}</td><td>{score}</td></tr>)
		});
		return rows;
	}

	render() {
		return (
			<table>
				<tbody>
					<tr><th>Cutoff Score</th><th>Chance</th></tr>
					{this.tableRows()}
				</tbody>
			</table>
		);
	}
}

