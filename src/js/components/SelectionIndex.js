import React from "react";

export default class SelectionIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			readingAndWriting: undefined,
			math: undefined
		}
	}

	updateReadingWriting(e) {
		this.setState({
			readingAndWriting: parseInt(e.target.value)
		});
	}

	updateMath(e) {
		this.setState({
			math: parseInt(e.target.value)
		});
	}

	validateScores() {
		let readingWritingScore = this.state.readingAndWriting;
		let mathScore = this.state.math;
		return (
			readingWritingScore && mathScore
			&& mathScore >= 160 && mathScore <= 760
			&& readingWritingScore >= 160 && readingWritingScore <= 760
			&& mathScore % 10 === 0 && readingWritingScore % 10 === 0
		);
	}

	updateSelectionIndex() {
		if (this.validateScores()) {
			return <b>{(this.state.math / 10) + 2 * (this.state.readingAndWriting / 10)}</b>;
		} else {
			return <span style={{color: 'red'}} >Please enter valid scores</span>;
		}
	}

	render() {
		return (
			<div style={{marginBottom: '10px'}}>
				<h4>2. Calculate your Selection Index</h4>

				<div style={{marginBottom: '10px'}} >
					<p>Your Selection Index is the number that is used to determine whether you qualify for recognition in the National Merit Scholarship Program.</p>
					<p>You can find your Selection Index by looking in your PSAT Score Report or by using the calculator below.</p>
					<span style={{width: '185px', display: 'inline-block'}} >Your Evidence-Based Reading and Writing Score (160 to 760):</span>
					<input onChange={this.updateReadingWriting.bind(this)} /><br />
					<span style={{width: '185px', display: 'inline-block'}} >Your Math Score (160 to 760):</span>
					<input onChange={this.updateMath.bind(this)} /><br />
				</div>
				Your NMSC Selection Index (48 to 228): {this.updateSelectionIndex()}
			</div>
		);
	}
}