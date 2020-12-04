import { Animal } from "../animals.js";

class Pet extends Animal {
    constructor ( name, color) {
        super ( name, color, legsCount, likePlaying )
    }

    walk (){
        console.log (`${this.animalKind} ${this.name} can ${this.movement} quite well!`);
    }
}
export { Pet }
