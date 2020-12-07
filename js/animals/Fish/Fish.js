import { Animal } from "../Animal.js";

class Fish extends Animal {
    constructor (name, color, finCount, likePlaying) {
        super (name, color)
        this.finCount = finCount; 
        this.likePlaying = likePlaying;
    }
    swim () {
        console.log (`${this.name} the ${this.animalKind} can ${this.movement} with its ${this.finCount} quite well!`);
    }
}
export { Fish }