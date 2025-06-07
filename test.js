// spread operator we can apply it on array and object(json)
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const c = [...a, ...b]; // all the elements of a would be left inside the [] of array c.
// it will give us all content from array A
// similarly all the elements of b would be added in c like array A.
console.log(c);

const e = { name: "John", age: 30, city: "New York" };
const f = { country: "USA", occupation: "Engineer" };
const g = { ...e, ...f }; // all the key-value pairs of e would be added to g

const h = [e, f];
// e : age :35, city : Los Angeles
h[0] = { ...e, age: 35, city: "Los Angeles", state: "LA" }; // bring all key-value pairs of e into h[0]
console.log(h[0]);
