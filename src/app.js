/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
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

    document.getElementById("number").innerHTML = "9";
  }

  console.log("Hola");
};
