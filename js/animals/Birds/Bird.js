import { Animal } from "../Animal.js";

class Bird extends Animal {
    constructor (name, color, wingsCount, likePlaying) {
        super (name, color)
        this.wingsCount = wingsCount; 
        this.likePlaying = likePlaying || "";
    }
    fly () {
        console.log (`${this.name} the ${this.animalKind} can ${this.movement} with its ${this.wingsCount} quite well!`);
    }
}
export { Bird }