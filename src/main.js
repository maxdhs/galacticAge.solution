import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Age } from './age.js';

let buttonElement = document.getElementById("button");
let userInputElement = document.getElementById("userInput");

buttonElement.addEventListener("click", captureInput);

function captureInput() {
  let userInput = userInputElement.value;
  let max = new Age(userInput);
  console.log(max.ageOnMercury());
}



