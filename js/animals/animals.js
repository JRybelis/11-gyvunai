import { Pet } from "./Pets/Pet.js";
import { Chicken } from "./Birds/Chicken.js";
import { Parrot } from "./Birds/Parrot.js";
import { Sparrow } from "./Birds/Sparrow.js";
import { Bullshark } from "./Fish/Bullshark.js";
import { Goldfish } from "./Fish/Goldfish.js";
import { Salmon } from "./Fish/Salmon.js";
import { Cat } from "./Pets/Cat.js";
import { Dog } from "./Pets/Dog.js";
import { Rabbit } from "./Pets/Rabbit.js";

class Animal {
    constructor (name, color) {
    this.name = name;
    this.color = color;
    }

    introduce () {
        console.log (`Hello, this is ${this.name} speaking. I am a ${this.color} ${this.animalKind}.`);
    }

    sound () {
        console.log (`${this.name}: ${this.noise}`)
    }
}

export {Animal, Pet, Chicken, Parrot, Sparrow, Bullshark, Goldfish, Salmon, Cat, Dog, Rabbit}