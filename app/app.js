import React from 'react';
import { render } from 'react-dom';
import { FilterableTable } from './components/FilterableTable';

let body = document.querySelector('body');
let appHolder = document.createElement('div');
appHolder.id = "app";

body.appendChild(appHolder);

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];


render( < FilterableTable products = { PRODUCTS }
        / > , document.getElementById('app'));