import React from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit',
	k: 'Kelvin',
	
};

function BoilingVerdict(props) {
	return <p><i>The water would {props.celsius >= 100 ? '' : 'NOT'} boil.</i></p>;
}

function toCelcius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 5 / 9) + 32 ;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString() + 'º';
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		console.log(this.props.onTemperatureChange);
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;
	
		return (
			<form className="form-group">
				<fieldset className="row">
					<label className="col-sm-4 text-right">º{scaleNames[scale]}:</label>
					<div className="col-sm-8">
						<input
							type="text"
							value={temperature}
							onChange={this.handleChange}
							className="form-control"
							placeholder="Enter temperature"
						/>
					</div>
				</fieldset>
			</form>
		);
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = {
			scale: '',
			temperature: ''
		}
	}

	handleCelsiusChange(temperature) {
		this.setState({
			scale: 'c',
			temperature: temperature
		})
	}

	handleFahrenheitChange(temperature) {
		this.setState({
			scale: 'f',
			temperature: temperature
		})
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

		return (
			<div>
				<TemperatureInput
					scale="c"
					temperature={celcius}
					onTemperatureChange={this.handleCelsiusChange}
				/>
				<TemperatureInput
					scale="f"
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange}
				/>
				<BoilingVerdict celcius={parseFloat(celcius)} />
			</div>
		);
	}
}

class LiftingStateUp extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h3>3. Lifting State Up</h3>
					<p>
						<a href="https://reactjs.org/docs/lifting-state-up.html" target="_blank" rel="noopener noreferrer">https://reactjs.org/docs/lifting-state-up.html</a>
					</p>
					<p>
						<strong>Reflecting the same changing data in several components</strong>. A temperature calculator that calculates whether the water would boil at a given temperature.
						sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.
					</p>
					<hr/>
				</div>
				<div>
					<Calculator />
				</div>
			</div>
		)
	}
}

export default LiftingStateUp;