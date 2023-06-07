const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    // Divide the array into two halves
    var mid = Math.floor(array.length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid);

    // Recursively sort the two halves
    var sortedLeft = mergeSort(left);
    var sortedRight = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

const merge = (left, right) => {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements from the left and right arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export default mergeSort;