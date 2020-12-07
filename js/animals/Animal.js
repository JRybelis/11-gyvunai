class Animal {
    constructor (name, color, animalKind) {
    this.name = name;
    this.color = color;
    this.animalKind = animalKind;
    // this.noise = noise;
    }

    introduce () {
        console.log (`Hello, this is ${this.name} speaking. I am a ${this.color} ${this.animalKind} that ${this.likePlaying} playing.`);
    }
    
    sound () {
        console.log (`${this.name}: ${this.noise}`);
    }
}
export {Animal}
