import { Pet } from "./Pet.js";

class Dog extends Pet {
    constructor ( name, color, legsCount ) {
        super ( name, color, legsCount, 'likes',  )
    
    
    this.animalKind = "dog";
    this.noise = "Bark-bark!";
    this.movement = "zoomie";
    }    
}
export { Dog }