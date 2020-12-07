import { Bird } from "./Bird.js";

class Chicken extends Bird {
    constructor ( name, color, wingsCount ) {
        super ( name, color, wingsCount, "dislikes")
    
    this.animalKind = "chicken";
    this.noise = "bwak bwak!";
    this.movement = "propel itself over a high fence";
    }
    
}
export { Chicken }
