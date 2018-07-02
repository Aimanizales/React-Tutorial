import React from 'react';

const scaleNames = {
	c: 'Celcius',
	f: 'Farenheit',
	k: 'Kelvin',
	
};

function BoilingVerdict(props) {
	return <p><i>The water would {props.celcius >= 100 ? '' : 'NOT'} boil.</i></p>;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	//const output = convert(input);
	const rounded = Math.round(input * 1000) / 1000;
	return rounded.toString();
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temperature: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			temperature: tryConvert(e.target.value)
		});
	}

	render() {
		const temperature = this.state.temperature;
		const scale = this.props.scale;
	
		return (
			<form className="form-group">
				<fieldset className="row">
					<label className="col-sm-3 text-right">Enter temperature in {scaleNames[scale]}:</label>
					<div className="col-sm-2">
						<input
							type="text"
							value={temperature}
							onChange={this.handleChange}
							className="form-control"
						/>
					</div>
					<div className="col-sm-7">º <BoilingVerdict celcius={parseFloat(temperature)} /></div>
				</fieldset>
			</form>
		);
	}
}

class Calculator extends React.Component {
	render() {
		return (
			<div>
				<TemperatureInput scale="c"/>
				{/* <TemperatureInput scale="f"/> */}
				{/* <TemperatureInput scale="k"/> */}
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