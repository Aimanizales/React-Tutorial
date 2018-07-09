import React from 'react';

const PRODUCTS = [
	{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
	{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
	{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
	{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
	{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
	{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class ProductCategoryRow extends React.Component {
	render() {
		const category = this.props.category;
		return (
			<tr>
				<th colSpan="2" className="bg-secondary text-light">{category}</th>
			</tr>
		);
	}
}

class ProductRow extends React.Component {
	render() {
		const product = this.props.product;
		const name = product.stocked
		? product.name
		: <span style={{color: 'red'}}>
			{product.name}
		</span>;

		return (
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
		);
	}
}

class ProductTable extends React.Component {
	render() {
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;
		const rows = [];
		let lastCategory = null;

		this.props.products.forEach((product) => {
			if (product.name.indexOf(filterText) === -1) {
				return;
			}
			if (inStockOnly && !product.stocked) {
				return;
			}
			if (product.category !== lastCategory) {
				rows.push(
				<ProductCategoryRow
					category={product.category}
					key={product.category} />
				);
			}
			rows.push(
				<ProductRow
					product={product}
					key={product.name}
				/>
			);
			lastCategory = product.category;
		});

		return (
			<table className="table table-striped" style={{width: '50%', margin: '0 auto'}}>
				<thead className="thead-dark">
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

class SearchBar extends React.Component {
	// Why is the constructor useless in this case?
	
	handleFilterTextChange = e => this.props.onFilterTextChange(e.target.value);
	handleInStockChange = e => this.props.onInStockChange(e.target.checked);

	render() {
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;

		return (
			<form style={{width: '50%', margin: '0 auto'}}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Search..."
						className="form-control"
						value={filterText}
						onChange={this.handleFilterTextChange}
					/>
				</div>
				<div className="form-group form-check">
					<input
						type="checkbox"
						id="exampleCheck"
						className="form-check-input"
						checked={inStockOnly}
						onChange={this.handleInStockChange}
					/>
					{' '}
					<label
						className="form-check-label"
						htmlFor="exampleCheck"
					>
						Only show products in stock
					</label>
				</div>
			</form>
		);
	}
}

class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		};
	}

	handleFilterTextChange = filterText => {
		this.setState({
			filterText: filterText
		});
	}

	handleInStockChange = inStockOnly => {
		this.setState({
			inStockOnly: inStockOnly
		})
	}

	render() {
		return (
			<div className="container">
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onFilterTextChange={this.handleFilterTextChange}
					onInStockChange={this.handleInStockChange}
				/>
				<ProductTable
					products={this.props.products}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
				/>
			</div>
		);
	}
}

class ThinkingInReact extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h3>4. Thinking In React</h3>
					<p>
						<a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank" rel="noopener noreferrer">https://reactjs.org/docs/thinking-in-react.html</a>
					</p>
					<p>
						In this document, we’ll walk you through the thought process of building a searchable product data table using React.
					</p>
					<hr/>
					<FilterableProductTable products={PRODUCTS} />
				</div>
			</div>
		)
	}
}

export default ThinkingInReact;