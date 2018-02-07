import React from 'react';
import { render } from 'react-dom';
import { FilterableTable } from './components/FilterableTable';

let body = document.querySelector('body');
let appHolder = document.createElement('div');
appHolder.id = "app";

body.appendChild(appHolder);

render( < FilterableTable / > , document.getElementById('app'));