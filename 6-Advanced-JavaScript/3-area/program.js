function getAreaFunctions(shapes) {
    let functions = [];
    shapes.forEach(shape=>{
        let func;
        switch (shape.toLowerCase()) {
            case "square":
                func = (x) => x * x;
                break;
            case "circle":
                func = (r) => Math.PI * r * r;
                break;
            case "rectangle":
                func = (x, y) => x * y;
                break;
            case "triangle":
                func = (h, b) => b * h / 2
                break;
        }
        functions.push(func);
    });
    return functions;
}

const functions = getAreaFunctions(['square', 'circle', 'rectangle', 'triangle']);

console.log(functions[0](1));
console.log(functions[1](2));
console.log(functions[2](2, 4));
console.log(functions[3](4, 5));
