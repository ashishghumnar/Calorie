import React from 'react';
import { render } from 'react-dom';

export class DataGridHead extends React.Component {
    constructor() {
        super();
    }

    creatTableHeads() {
        const columns = Object.keys(this.props.data[0]);
        
        return columns.map(function(column) {
            return <td>{ column }</td>
        });
    }

    render() {
        return (
            <thead>
                <tr>
                    {this.creatTableHeads()}
               </tr>
            </thead>)
    }
}