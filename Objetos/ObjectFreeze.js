const person = {
    name: "Ryan",
    age: 11,
    city: "Cuiabá"
};
Object.freeze(person);
person.age = 31;
console.log(person);