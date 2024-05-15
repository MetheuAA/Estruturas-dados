let fila = [1, 2, 3];
// Definindo a função dequeue como parte do protótipo de Array
Array.prototype.dequeue = function() {
    return this.shift();
};
console.log(fila.dequeue()); // Saída: 1
console.log(fila); // Saída: [2, 3].