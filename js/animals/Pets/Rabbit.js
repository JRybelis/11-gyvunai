import { Pet } from "./Pet.js";

class Rabbit extends Pet {
    constructor ( name, color, legsCount ) {
        super ( name, color, legsCount, "dislikes")
    
    this.animalKind = "rabbit";
    this.noise = "Squeak squeak!";
    this.movement = "hop around";
    }
    
}
export { Rabbit }
