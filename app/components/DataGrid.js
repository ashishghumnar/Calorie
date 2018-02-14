import React, { Component } from 'react';
import { render } from 'react-dom';
import { GridRows } from './GridRows';
import { DataGridHead } from './DataGridHead';

export class DataGrid extends Component {
    constructor() {
        super();
    }

    render() {
        return ( <table >
                <DataGridHead data = { this.props.data }/>
                <GridRows rows = { this.props.data } filterText = { this.props.filterText }/ >
            </table >
        );
    }
}