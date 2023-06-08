const bubbleSort = (array) => {
    let len = array.length;
    let swapped;

    for (let i = 0; i < len - 1; i++) {
        swapped = false;

        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }

        // If no swaps were made in the inner loop, the array is already sorted
        if (!swapped) {
            break;
        }
    }

    return array;
}

export default bubbleSort;