const countingSort = (array) => {
    // Find the maximum element in the array
    let [min, max] = findMinMax(array);

    // Create a count array with length equal to max-min+1 and initialize all elements to 0
    let count = new Array(max - min + 1).fill(0);

    // Store the count of each element in the input array
    for (let i = 0; i < array.length; i++) {
        count[array[i] - min]++;
    }

    // Modify the count array to store the actual position of each element in the output array
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Create an output array with the same length as the input array
    let output = new Array(array.length);

    // Build the output array
    for (let i = array.length - 1; i >= 0; i--) {
        output[count[array[i] - min] - 1] = array[i];
        count[array[i] - min]--;
    }

    return output;
}

const findMinMax = (array) => {
    let max = array[0];
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        max = Math.max(max, array[i]);
        min = Math.min(min, array[i]);
    }
    return [min, max];
}

export default countingSort;