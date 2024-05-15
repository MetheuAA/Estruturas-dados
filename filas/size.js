let fila = [1, 2, 3];
fila.size = function() {
    return this.length;
};
console.log(fila.size()); // Saída: 3