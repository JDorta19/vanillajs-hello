/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn");

  console.log("Hello Rigo from the console!");
  let generateExcuse = () => {
    let pronoun = ["A", "The"];
    let who = ["dog", "grandma", "mailman", "bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let possetion = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    let pronounIndex = Math.floor(Math.random() * pronoun.length);
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possetionIndex = Math.floor(Math.random() * possetion.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return (
      pronoun[pronounIndex] +
      " " +
      who[whoIndex] +
      " " +
      action[actionIndex] +
      " " +
      possetion[possetionIndex] +
      " " +
      when[whenIndex]
    );
  };
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
};
