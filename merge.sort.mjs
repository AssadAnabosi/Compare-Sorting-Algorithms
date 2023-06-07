const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    // Divide the array into two halves
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    // Recursively sort the two halves
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

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