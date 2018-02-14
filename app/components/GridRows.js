import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';

export class GridRows extends React.Component {
    constructor() {
        super();
    }

    getGridRows() {
        const me = this;

        const searchText = this.props.filterText;

        return _(this.props.rows)
        .filter(function(row) {
            return _(row)
            .keys()
            .some(function(key) {
                return _.includes(row[key].toString(), searchText);
            })
        })
        .map(row => {
            return <tr>
                { me.getRowColumns(row) }
            </tr>
        })
        .value();
    }

    getRowColumns(row) {
        const columns = _.keys(this.props.rows[0]);

        return _.map(columns, column => {
            return <td> { row[column].toString() } </td>
        });
    }

    render() {
        return <tbody > { this.getGridRows() } < /tbody>
    }

}