import { Animal } from "../Animal.js";

class Pet extends Animal {
    constructor ( name, color, legsCount, likePlaying ) {
        super ( name, color)
            this.legsCount = legsCount;
            this.likePlaying = likePlaying || "";
    }
    walk () {
        console.log (`${this.name} the ${this.animalKind} can ${this.movement} with its ${this.legsCount} quite well!`);
    }
}
export { Pet }
