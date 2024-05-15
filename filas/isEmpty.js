let fila = [1, 2, 3];
fila.isEmpty = function() {
    return this.length === 0;
};
fila.enqueue = function(item) {
    this.push(item);
};
console.log(fila.isEmpty()); // Saída: true
fila.enqueue(1);
console.log(fila.isEmpty()); // Saída: false