import "bootstrap";
import "./style.css";

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

window.onload = function() {
  let whorand = who[Math.floor(Math.random() * who.length)];
  let actionrand = action[Math.floor(Math.random() * action.length)];
  let whatrand = what[Math.floor(Math.random() * what.length)];
  let whenrand = when[Math.floor(Math.random() * when.length)];
  let p = document.getElementById("excuse");
  p.innerHTML = `${whorand} ${actionrand} ${whatrand} ${whenrand}`;
};
