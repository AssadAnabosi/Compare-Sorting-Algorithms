import bubbleSort from "./bubble.sort.mjs";
import insertionSort from "./insertion.sort.mjs";
import selectionSort from "./selection.sort.mjs";
import mergeSort from "./merge.sort.mjs";
import quickSort from "./quick.sort.mjs";

let numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers)); // Output: [2, 3, 4, 5, 8]
console.log(insertionSort(numbers)); // Output: [2, 3, 4, 5, 8]
console.log(selectionSort(numbers)); // Output: [2, 3, 4, 5, 8]
console.log(mergeSort(numbers)); // Output: [2, 3, 4, 5, 8]
console.log(quickSort(numbers)); // Output: [2, 3, 4, 5, 8]