// Boolean:
const isDone: boolean = true;

// Number:
const decimal: number = 12;
const hex: number = 3.14;
const bin: number = 0b1010;

// String:
let color: string = "blue";
color = "red";

// Arrays:
const arr: number[] = [1, 2, 3];

// void:
const someFunc = (): void => {
  // lya lya lya do something
  // if func isn't return anything it's void
};

// not same type array (turple):
let arr1: [string, number];
arr1 = ["some text", 2];

// enum:
enum someVar {
  first, //
  second = 2,
  third,
  fourth,
}

// Never:

const msg = "hello";
// func return Error
const err = (msg: string): never => {
  throw new Error(msg);
};

// func do infinite loop:
const infiniteLoop = (): never => {
  while (true) {
    // lya lya lya
  }
};

// Object:
const create = (o: object | null): void => {};

console.log("ob:", create({ f: 1 }));

// union type:
let id: string | number = "01";
console.log("id: ", id);
id = 1;
console.log("id: ", id);

// Custom type:
type Name = string;
let ID: Name;
ID = "3";
// ID = 4; // will be error

// Advanced enum:
enum Dirs {
  up = 2,
  down = 4,
  left = 5,
  right = 7,
}

console.log("enum up:", Dirs.up);
console.log("enum down:", Dirs.down);
console.log("enum index #5:", Dirs[5]);
console.log("enum index #7:", Dirs[7]);

// const enum
const enum links {
  vk = "https://vk.com",
  youtube = "https://youtube.com",
}

// compiled code will not empty only when used enum values like:
const aray = [links.youtube, links.vk];
