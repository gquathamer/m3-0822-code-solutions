import React from 'react';
import ReactDOM from 'react-dom/client';

const headerElement = React.createElement('h1', null, 'Hello, React');

console.log(headerElement);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(headerElement);
