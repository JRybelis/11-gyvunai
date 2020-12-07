import { Animal } from "../Animal.js";

class Pet extends Animal {
    constructor ( name, color, animalKind, legsCount, likePlaying ) {
        super ( name, color, animalKind)
            this.legsCount = legsCount;
            this.likePlaying = likePlaying;
            // this.movement = movement;
    }
    walk () {
        console.log (`${this.animalKind} ${this.name} can ${this.movement} with its ${this.legsCount} quite well!`);
    }
}
export { Pet }
