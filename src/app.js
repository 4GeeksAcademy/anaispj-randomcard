/* eslint-disable */
import "bootstrap";
import "./style.css";


  //write your code here
  window.onload = function() {
    newCard()
  }

  function newCard() {
    let suits = ["♦", "♥", "♠", "♣"];
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexSuits = Math.floor(Math.random() * suits.length);
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    document.querySelector("#number").innerHTML = numbers[indexNumbers];
    document.querySelector("#top").innerHTML = suits[indexSuits];
    document.querySelector("#end").innerHTML = suits[indexSuits];

    // let colorSuits = suits[indexSuits] === '♦' || suits[indexSuits] === '♥' ? "text-danger" : ""
    
    let colorSuits; 

    if (suits[indexSuits] === '♦' || suits[indexSuits] === '♥') {
      colorSuits = 'text-danger';
    } else {
      colorSuits = ''
    };
    
    document.querySelector("#top").className = colorSuits;
    document.querySelector("#end").className = colorSuits;
};
  
  
  


  document.getElementById('btnNewCard').addEventListener("click", newCard);

  setInterval(() => newCard(), 10000);
  
