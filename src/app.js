/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function numAleatorio(anArray) {
    return Math.floor(Math.random() * anArray.length);
  }

  let excuse = who[numAleatorio(who)] + " ";
  excuse += action[numAleatorio(action)] + " ";
  excuse += what[numAleatorio(what)] + " ";
  excuse += when[numAleatorio(when)];

  document.getElementById("excuse").innerHTML = excuse;
};
