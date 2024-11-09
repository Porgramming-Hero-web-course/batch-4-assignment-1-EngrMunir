Union types (|) give flexibility by allowing a variable to be one of several types.

type StringOrNumber = string | number;

function process(value: StringOrNumber) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value * 2;
}

console.log(process("hello"));
console.log(process(5));

Intersection types (&) give precision by requiring a variable to meet the criteria of multiple types simultaneously.

type Car = { make: string; model: string };
type Electric = { battery: number; chargeTime: number };

type ElectricCar = Car & Electric;

const myCar: ElectricCar = {
  make: "Tesla",
  model: "Model S",
  battery: 100,
  chargeTime: 1.5
};

console.log(myCar);

Both union and intersection types are essential for writing clean, type-safe, and flexible TypeScript code. They allow you to handle a variety of situations and data structures while keeping the code easy to understand and maintain.