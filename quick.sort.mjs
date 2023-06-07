const quickSort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        let pivotIndex = partition(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
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