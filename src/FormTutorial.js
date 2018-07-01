import React from 'react';

function App() {
	const numbers = [1, 2, 3, 4, 5, 6, 7];
	const listItems = numbers.map((number, index) => {
	if (number === 3) return null;
		return <li key={index}>{number}</li>;
	});
	
	return (
		<div className="App">
			<h3>1.1 List test</h3>
			<ul>{listItems}</ul>
		</div>
	);
}

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
				<App />
				<div>
					<h2>1. Form Tutorial</h2>
					<p>This is the part related with the Game that appears in the <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">Tutorial</a> on React page.</p>
				</div>
				<form className="form-group">
					<h3>1.2 The Form</h3>
					<p>this.state={this.state.name}</p>
					<p>this.isGoing={this.state.isGoing.toString()}</p>
					<p>this.numberOfGuests={this.state.numberOfGuests}</p>
					<label>
						Name:
						<input
							type="text"
							name="name"
							placeholder="Write your Name"
							//value={this.state.value}  // only once?
							onChange={this.handleInputChange}
							className="form-control"
						/>
					</label>
					<br />
					<label>
						Is Going:
						<input
							name="isGoing"
							type="checkbox"
							checked={this.state.isGoing}
							onChange={this.handleInputChange}
							className="form-control"
					/>
					</label>
					<br />
					<label>
						Number of guests:
						<input
							name="numberOfGuests"
							type="number"
							value={this.state.numberOfGuests}
							onChange={this.handleInputChange}
							className="form-control"
						/>
					</label>
					<br />
					<input
						type="submit"
						value="Submit"
						class="btn btn-primary" />
					<br />
				</form>
			</div>
		);
	}
};