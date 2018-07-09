import React from 'react';

class ReduxTutorial extends React.Component {
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

	render() {
		return (
			<div>
				<div>
					<h3>5. Redux Tutorial</h3>
					<p><a href="https://youtu.be/TmIJXiEA1fg" target="_blank" rel="noopener noreferrer">https://youtu.be/TmIJXiEA1fg</a></p>
					<hr/>
				</div>
			</div>
		);
	}
};

export default ReduxTutorial;