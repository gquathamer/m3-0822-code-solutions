import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const topics = [
  {
    topic: 'HTML',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem. Accumsan sit amet nulla facilisi morbi tempus iaculis.',
    id: '1'
  },
  {
    topic: 'CSS',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit scelerisque. Accumsan lacus vel facilisis volutpat.',
    id: '2'
  },
  {
    topic: 'JavaScript',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies mi quis. Rutrum tellus pellentesque eu tincidunt tortor.',
    id: '3'
  }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(< Accordion topics={topics} />);
