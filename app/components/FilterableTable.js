import React from 'react';
import { render } from 'react-dom';
import { GridSearch } from './GridSearch';
import { DataGrid } from './DataGrid';

export class FilterableTable extends React.Component {
	constructor () {
		super();
		this.state = {
			filterText: ''
		};
	}

	handleFilterTextChange(searchText) {
		this.setState({
			filterText: searchText
		});
	}

	render() {
		return (<div>
			    	<GridSearch onFilterTextChange = { this.handleFilterTextChange.bind(this) }/>
	        		<DataGrid
	        			data = {this.props.products} 
	        			filterText = { this.state.filterText}  />
	        	</div>);
	}
}