import * as generate from "./array.generate.mjs";
import compareAlgorithms from "./compare.mjs";

let arraySizes = [10, 100, 1000, 10000, 100000, 1000000];

arraySizes.forEach((size) => {
    let sortedArray = generate.sortedArray(size);
    let randomArray = generate.randomArray(size);
    let reversedArray = generate.reversedArray(size);

    compareAlgorithms("Sorted", sortedArray);
    compareAlgorithms("Random", randomArray);
    compareAlgorithms("Reversed", reversedArray);
});