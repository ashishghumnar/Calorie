import React from 'react';
import { render } from 'react-dom';

export class GridSearch extends React.Component {
    constructor() {
        super();
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        return (
            <input type = "text"
                placeholder = "Search"
                onChange = { this.handleFilterTextChange }
            />)
    }
}