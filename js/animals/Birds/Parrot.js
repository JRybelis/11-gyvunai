import { Bird } from "./Bird.js";

class Parrot extends Bird {
    constructor ( name, color, wingsCount ) {
        super ( name, color, wingsCount)
    
    this.animalKind = "parrot";
    this.noise = "Mackaw mackaw!";
    this.movement = "fly off";
    this.wordRepeat = "Pirk bilietą!"
    }
    repeatSound (){
        console.log (`${this.name} repeats: ${this.wordRepeat}`);
    }
}
export { Parrot }
