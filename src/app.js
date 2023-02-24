/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateDomain() {
  let pronoun = ["the", "our", "your", "mine"];
  let adj = ["great", "big", "small", "gorgeus"];
  let noun = ["jogger", "racoon", "doctor", "snake"];

  let pronIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);

  let result = pronoun[pronIndex] + " " + adj[adjIndex] + " " + noun[nounIndex];
  return result;
}

window.onload = function() {
  //write your code here
  document.getElementById("frase").innerHTML = generateDomain();
  console.log("Hello Rigo from the console!");
};
