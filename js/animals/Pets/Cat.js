import { Pet } from "./Pet.js";

class Cat extends Pet {
    constructor ( name, color, legsCount, likePlaying ) {
        super ( name, color, legsCount, likePlaying, animalKind )
    
    this.animalKind = "The cat";
    this.noise = "Meaow!";
    this.movement = "climb everywhere";
    this.legsCount = "4 legs"
    this.likePlaying = "likes"
    }
    
}
export { Cat }
