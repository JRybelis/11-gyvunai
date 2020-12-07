import { Fish } from "./Fish.js";

class Goldfish extends Fish {
    constructor ( name, color, finCount ) {
        super ( name, color, finCount)
    
    this.animalKind = "goldfish";
    this.noise = "bubble bubble.";
    this.movement = "make circles in an aquarium";
    }
    
}
export { Goldfish }
