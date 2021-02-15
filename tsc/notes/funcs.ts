// funcs:
const createPass = (name: string, age: number) => `${name}${age}`;

// default values and union type:
const createP = (name: string = "Kas", age: number | string = "32") => `${name}${age}`;

// non default values:
const create = (name: string, age?: number) => `${name}${age}`
