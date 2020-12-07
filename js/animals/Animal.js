class Animal {
    constructor (name, color) {
    this.name = name;
    this.color = color;
    }

    introduce () {
        console.log (`Hello, this is ${this.name} speaking. I am a ${this.color} ${this.animalKind}${this.likePlaying}.`);
    }
    
    sound () {
        console.log (`${this.name}: ${this.noise}`);
    }
}
export {Animal}
