import * as generate from "./array.generate.mjs";
import compareAlgorithms from "./compare.mjs";

let arraySizes = [1000, 5000, 10000, 25000, 50000, 75000, 100000, 150000, 300000, 500000];
let types = ["Sorted", "Random", "Reversed"];

types.forEach((type) => {
    arraySizes.forEach((size) => {
        let array = generate[type.toLowerCase() + "Array"](size);
        // @desc  Compare the execution time of different sorting algorithms
        compareAlgorithms(type, array);
    });
});