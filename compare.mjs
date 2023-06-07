import bubbleSort from "./bubble.sort.mjs";
import insertionSort from "./insertion.sort.mjs";
import selectionSort from "./selection.sort.mjs";
import mergeSort from "./merge.sort.mjs";
import quickSort from "./quick.sort.mjs";

import findAvgExecTime from "./executer.mjs";

const compareAlgorithms = (type, array) => {
    const RUN_COUNT = 10;
    let executionTime = 0;
    console.log(`${type} Array of size ${array.length} elements`);
    executionTime = findAvgExecTime(bubbleSort, array, RUN_COUNT);
    console.log("Bubble Sort:", executionTime);
    executionTime = findAvgExecTime(insertionSort, array, RUN_COUNT);
    console.log("Insertion Sort:", executionTime);
    executionTime = findAvgExecTime(selectionSort, array, RUN_COUNT);
    console.log("Selection Sort:", executionTime);
    executionTime = findAvgExecTime(mergeSort, array, RUN_COUNT);
    console.log("Merge Sort:", executionTime);
    executionTime = findAvgExecTime(quickSort, array, RUN_COUNT);
    console.log("Quick Sort:", executionTime);
}

export default compareAlgorithms;