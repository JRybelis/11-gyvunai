import { Pet } from "./Pet.js";

class Cat extends Pet {
    constructor ( name, color, legsCount ) {
        super ( name, color, legsCount, "likes")
    
    this.animalKind = "cat";
    this.noise = "Meaow!";
    this.movement = "climb everywhere";
    }
    
}
export { Cat }
