import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  { url: './images/001.png', id: 1 },
  { url: './images/004.png', id: 2 },
  { url: './images/007.png', id: 3 },
  { url: './images/025.png', id: 4 },
  { url: './images/039.png', id: 5 }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Carousel imageURL={images} />);
