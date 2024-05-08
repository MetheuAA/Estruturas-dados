const person = {
    name: "Wanderson",
    age: 40,
    city: "Cuiabá"
};
Object.seal(person);
person.age = 31;
person.gender = "masculino";
console.log(person);
