import React from 'react';

/* function App() {
	const numbers = [1, 2, 3, 4, 5, 6, 7];
	const listItems = numbers.map((number, index) => {
	if (number === 3) return null;
		return <li key={index}>{number}</li>;
	});
	
	return (
		<div className="App">
			<h4>1.2 List test</h4>
			<hr/>
			<p>Conditional formatting.</p>
			<ul>{listItems}</ul>
		</div>
	);
} */

export class FormTutorial extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			isGoing: false,
			numberOfGuests: 2
		}
		this.handleSubmit = this.handleSubmit.bind(this); // why???
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		let value = target.type === "checkbox" ? target.checked : target.value;
		if (name === "name") {
			value = target.value.toUpperCase();
		}
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		alert("A name was submited: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<div>
					<h3>1. Form Tutorial</h3>
					<p><a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">https://reactjs.org/tutorial/tutorial.html</a></p>
					<hr/>
				</div>
				<form className="form-group">
					<div className="alert alert-info" role="alert">
						this.state=<strong>{this.state.name}</strong><br/>
						this.isGoing=<strong>{this.state.isGoing.toString()}</strong><br/>
						this.numberOfGuests=<strong>{this.state.numberOfGuests}</strong><br/>
					</div>
					<div className="form-group row">
						<label className="col-sm-2">
							Name:
						</label>
						<div className="col-sm-3">
							<input
								type="text"
								name="name"
								placeholder="Write your Name"
								//value={this.state.value}  // only once?
								onChange={this.handleInputChange}
								className="form-control form-control-sm"
							/>
						</div>
					</div>
					<div className="form-group row">
						<label className="form-check-label col-sm-2">
							Is Going:
						</label>
						<div className="col-sm-3">
							<input
								name="isGoing"
								type="checkbox"
								checked={this.state.isGoing}
								onChange={this.handleInputChange}
								className="form-control form-control-sm"
							/>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-sm-2">
							Number of guests:
						</label>
						<div className="col-sm-3">
							<input
								name="numberOfGuests"
								type="number"
								value={this.state.numberOfGuests}
								onChange={this.handleInputChange}
								className="form-control form-control-sm"
							/>
						</div>
					</div>
					<div className="form-group">
						<input
							type="submit"
							value="Submit"
							className="btn btn-primary btn-sm" />
					</div>
				</form>
				{/* <App /> */}
			</div>
		);
	}
};