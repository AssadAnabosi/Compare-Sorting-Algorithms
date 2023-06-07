import * as generate from "./array.generate.mjs";
import compareAlgorithms from "./compare.mjs";

let arraySizes = [10, 100, 1000, 10000, 100000];
let types = ["Sorted", "Random", "Reversed"];

types.forEach((type) => {
    arraySizes.forEach((size) => {
        let array = generate[type.toLowerCase() + "Array"](size);
        // @desc  Compare the execution time of different sorting algorithms
        compareAlgorithms(type, array);
    });
});