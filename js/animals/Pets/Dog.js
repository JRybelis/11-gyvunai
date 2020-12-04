import { Pet } from "./Pet.js";

class Dog extends Pet {
    constructor ( name, color, legsCount, likePlaying ) {
        super ( name, color, legsCount, likePlaying )
    
    this.animalKind = "Dog";
    this.noise = "Bark-bark!";
    this.movement = "zoomie"
    }
    

}