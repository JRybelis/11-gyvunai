import * as Animals from "./animals/ark.js";

const shruikan = new Animals.Dog ("Shruikan", "black", "4 legs", "dog");
shruikan.walk();
shruikan.introduce();
shruikan.sound();

console.log ("_____________________________________________")
const champa = new Animals.Cat ("Champa", "purple", 
"4 legs", "cat" )