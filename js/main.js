import * as Animals from "./animals/ark.js";

const shruikan = new Animals.Dog ("Shruikan", "black", "4 legs");
shruikan.walk();
shruikan.introduce();
shruikan.sound();

console.log ("_____________________________________________")

const champa = new Animals.Cat ("Champa", "purple", 
"4 legs" );
champa.walk();
champa.introduce();
champa.sound();

console.log ("_____________________________________________")

const bugs = new Animals.Rabbit ("Bugs", "grey", "4 legs");
bugs.walk();
bugs.introduce();
bugs.sound();

console.log ("_____________________________________________")
const clarice = new Animals.Chicken ("Clarice", "brown", "2 wings");
clarice.fly();
clarice.introduce();
clarice.sound();