import { Fish } from "./Fish.js";

class Salmon extends Fish {
    constructor ( name, color, finCount ) {
        super ( name, color, finCount)
    
    this.animalKind = "salmon";
    this.noise = "gulp gulp.";
    this.movement = "swim from Alaska to Japan - and back -";
    }
    
}
export { Salmon }
