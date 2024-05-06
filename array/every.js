let array = [2, 4, 6, 8 , 10];
let allEvery = array.every(function(element) {
    return element % 2 === 0;
});
console.log(allEvery);