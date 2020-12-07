import { Pet } from "./Pet.js";

class Dog extends Pet {
    constructor ( name, color, legsCount ) {
        super ( name, color, legsCount, " that loves playing" )
    
    
    this.animalKind = "dog";
    this.noise = "Bark-bark!";
    this.movement = "zoomie";
    }    
}
export { Dog }