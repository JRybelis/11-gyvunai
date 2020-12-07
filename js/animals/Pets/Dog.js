import { Pet } from "./Pet.js";

class Dog extends Pet {
    constructor ( name, color, legsCount, animalKind ) {
        super ( name, color, animalKind, legsCount, 'likes',  )
    
    
    // this.animalKind = "The dog";
    this.noise = "Bark-bark!";
    // this.movement = "zoomie";
    }    
}
export { Dog }