
let h1 = document.getElementById("header"); // Ausgabe von Elementen mit ID Header über das Document Object Model (DOM)

let value = h1.outerText; //Ausgabe des Texts innerhalb des h1 Elements

h1.style.fontSize = "100px"; //JS ermöglicht es CSS-Properties zu verändern

let p = document.createElement("p") //JS kann HTML-Elemente erstellen, hier <p>


document.body.appendChild(p) //Elemente müssen in DOM integriert werden (Baumstruktur)

p.outerText="text" 

console.log(p);

console.log(h1);
console.log(value);