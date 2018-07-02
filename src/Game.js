import React from 'react';

/**
 * Functional Components
 * @param {object} props 
 */
function Square(props) {
	return (
		<button
			className="square"
			/* removed arrow function and (). 
			onClick={props.onClick()} would not work because it would call 
			props.onClick immediately instead of passing it down. */
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

function calculateWinner(squares) {
	const lines = [ 
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
};

class Board extends React.Component {
	renderSquare(i) {
		return (
			<Square
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
		);
	}
	
	render() {
		return (
			<div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

export class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [{
				squares: Array(9).fill(null)
			}],
			stepNumber: 0,
			xIsNext: true
		}
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		/**
		 * slice() > operator to copy the squares array prior to making changes 
		 * and to prevent mutating the existing array
		 * https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important
		 */
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([{
				squares: squares
			}]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext
		});
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0
		});
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);

		const moves = history.map((step, move) => {
			const desc = move ? 
				'Go to move #' + move :
				'Go to game start';
			return (
				<li key={move}>
					<button onClick={()=> this.jumpTo(move)} className="btn btn-outline-primary btn-sm">
						{desc}
					</button>
				</li>
			)
		});

		let status = winner ? ('Winner: ' + winner) : ('Next Player: ' + (this.state.xIsNext ? 'X' : 'O'));

		return (
			<div>
				<div>
					<h2>2. TicTacToe Game</h2>
					<p>This is the part related with the Game that appears in the <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">Tutorial</a> on React page.</p>
				</div>
				<div className="game">
					<Board
						className="game-board"
						squares={current.squares}
						onClick={(i)=> this.handleClick(i)}
					/>
					<div className="game-info">
						<div>
							Status: <i>{status}</i>
						</div>
						<ol>
							{moves}
						</ol>
					</div>
				</div>
				<hr/>
			</div>
		);
	}
}
