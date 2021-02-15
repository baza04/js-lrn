const array: string[] = ["hello world", "asd"];
console.log("arr:", array);

let arr2: Array<string> = ["1", "4", "15"];
console.log("second arr: ", arr2);

let multArr: [string, number];
multArr = ["12", 12];
console.log("mult:", multArr);

const func = (): void => {
  console.log("this is void type");
};
func();

const someType: any = [1, "2"];
console.log("any:", someType);

enum Directions {
  up, // 0
  right, // 1
  down, // 2
  left, //3
}

console.log("up: ", Directions.up);
console.log("down: ", Directions.down);

enum initObj {
  six = 6,
  five = 5,
  nine = 9,
  next, //10
}

console.log("nine:", initObj.nine);
console.log("next:", initObj.next);

const text = "404 not found page yo";
const errFunc = (text: string): never => {
  throw new Error(text);
};

// errFunc(text);

const errFunc1 = (): never => {
  while (true) {
    // lya
  }
};

// errFunc1();

const createO = (o: object | null): object => {
  return o;
};

console.log("ob:", createO({ f: 1 }));

const Num = (num: number): number => {
  return num;
};
console.log("num: ", Num(3));

let Id: string | number = "01";
console.log("Id: ", Id);
Id = 1;
console.log("Id: ", Id);

const crPass = (name: string, age: number) => `${name}${age}`;
console.log("pass:", crPass("Sam", 25));

const crP = (name: string, age: number | string) => `${name}${age}`;
console.log("passUnionAge:", crP("Din", "24"));

const createNonDefault = (name: string, age?: number) => `${name}${age}`;
console.log("?value:", createNonDefault("Boby"));

