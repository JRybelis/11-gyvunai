import { Bird } from "./Bird.js";

class Sparrow extends Bird {
    constructor ( name, color, wingsCount ) {
        super ( name, color, wingsCount)
    
    this.animalKind = "sparrow";
    this.noise = "chirp chirp!";
    this.movement = "fly very fast";
    }
    
}
export { Sparrow }
