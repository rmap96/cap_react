// Every non JS file must have their extension specified
import big from '../assets/big.png';
import small from '../assets/small.png';
import './css/image_viewer.css';

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);