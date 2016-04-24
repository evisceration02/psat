import React from "react";

export default class SemifinalistCutoffs extends React.Component {
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
			<div>
				//<h4>4. Determine whether you'll be a Semifinalist</h4>

				<table>
					<tbody>
						<tr><th>Cutoff Score</th><th>Chance</th></tr>
						{this.tableRows()}
					</tbody>
				</table>
			</div>
		);
	}
}

