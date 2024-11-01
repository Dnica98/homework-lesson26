
// const obj = {
//     name: 'Ana',

// }

// Object.defineProperties(obj,  {
//    job:{ value: 'dev',
//     writable: false,
//     enumerable: true,
//     configurable: true,
//    },
//    city: {
//     value: 'chisinau',
//     writable: true,
//     enumerable: false,
//     configurable: true
//    },
//    age:{
//     value: '30',
//     writable: true,
//     enumerable: true,
//     configurable:true
//    }
// })

// console.log(Object.getOwnPropertyDescriptors(obj))

const func = function() {
    return 'My name is: '+ this.name
}

const obj = {
    name:'Ana',
    greet: func,
}

const obj1 = {
    name: 'Ion',
    greet: func,
}
const obj2 = {
    name: 'Var1',
    greet: func,
}

const bound = func.bind(obj2)

console.log(obj.greet())
console.log(obj1.greet.call(obj, 'hello'))
console.log(obj1.greet.apply(obj2, ['hey']))
console.log(bound('Bonjour'))



class Animals {
    constructor({specie, habitat, longevitate}){
        this.specie = specie
        this.habitat = habitat
        this.lengevitate = longevitate
    }
    continent(){
        return `${this.specie} isi are habitaclul in ${this.habitat} si are o durata de viata medie ${this.lengevitate}`
    }
}

class Animal extends Animals{
    constructor(specie, habitat, longevitate, masa) {
        super({specie,habitat,longevitate});
        this.masa = masa;
    }
    specificatii(migrare,maxim){
        this.habitat = migrare;
        this.masa = maxim;
    }
    detaliiAnimal(){
        return `${this.continent()} Este un animal care ${this.habitat} si ajunge la masa corporala ${this.masa}`
    }


}
const vita = new Animal('vita','pasune', 20, 300);
console.log(vita.detaliiAnimal());
vita.specificatii('nu migreaza', 450);
console.log(vita.detaliiAnimal())


