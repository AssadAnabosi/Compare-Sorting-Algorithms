# Compare-Sorting-Algorithms

To compare two algorithms you need to pass the same array to both algorithms, and to get accurate results you run every algorithm multiple times against the same array to get the Average. run-time.

### Sorting Algorithms

- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort
- Counting Sort

### index.mjs

defines the size for arrays to be tested against the different sorting algorithms for each array type.

### generate.mjs

generates the arrays to be tested against the different sorting algorithms for each array type.

- Sorted Array - sorted in ascending order
- Reverse Array - sorted in descending order
- Random Array - sorted in random order
- Controlled Random Array - sorted in random order with a controlled range of numbers to be generated.

### executor.mjs

exports a function that receives the sorting algorithm, array of numbers, and the number of times to run to calculate the average.

### compare.mjs

exports a function that receives the array of numbers to be compared across all the defined sorting algorithms.
