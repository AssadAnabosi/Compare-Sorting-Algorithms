const quickSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    let stack = [];
    stack.push(0);
    stack.push(array.length - 1);

    while (stack.length > 0) {
        let end = stack.pop();
        let start = stack.pop();

        let pivotIndex = partition(array, start, end);

        if (pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }

        if (pivotIndex + 1 < end) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }

    return array;
}

const partition = (array, left, right) => {
    let pivot = array[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, right);
    return i + 1;
}

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export default quickSort;