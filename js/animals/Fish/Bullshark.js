import { Fish } from "./Fish.js";

class Bullshark extends Fish {
    constructor ( name, color, finCount ) {
        super ( name, color, finCount)
    
    this.animalKind = "bullshark";
    this.noise = "chomp chomp!";
    this.movement = "swim in coastal waters";
    }
    
}
export { Bullshark }
