var array = ["hello world", "asd"];
console.log("arr:", array);
var arr2 = ["1", "4", "15"];
console.log("second arr: ", arr2);
var multArr;
multArr = ["12", 12];
console.log("mult:", multArr);
var func = function () {
    console.log("this is void type");
};
func();
var someType = [1, "2"];
console.log("any:", someType);
var Directions;
(function (Directions) {
    Directions[Directions["up"] = 0] = "up";
    Directions[Directions["right"] = 1] = "right";
    Directions[Directions["down"] = 2] = "down";
    Directions[Directions["left"] = 3] = "left";
})(Directions || (Directions = {}));
console.log("up: ", Directions.up);
console.log("down: ", Directions.down);
var initObj;
(function (initObj) {
    initObj[initObj["six"] = 6] = "six";
    initObj[initObj["five"] = 5] = "five";
    initObj[initObj["nine"] = 9] = "nine";
    initObj[initObj["next"] = 10] = "next";
})(initObj || (initObj = {}));
console.log("nine:", initObj.nine);
console.log("next:", initObj.next);
var text = "404 not found page yo";
var errFunc = function (text) {
    throw new Error(text);
};
// errFunc(text);
var errFunc1 = function () {
    while (true) {
        // lya
    }
};
// errFunc1();
var createO = function (o) {
    return o;
};
console.log("ob:", createO({ f: 1 }));
var Num = function (num) {
    return num;
};
console.log("num: ", Num(3));
var Id = "01";
console.log("Id: ", Id);
Id = 1;
console.log("Id: ", Id);
var crPass = function (name, age) { return "" + name + age; };
console.log("pass:", crPass("Sam", 25));
var crP = function (name, age) { return "" + name + age; };
console.log("passUnionAge:", crP("Din", "24"));
