const quickSort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        var pivotIndex = partition(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
}

const partition = (array, left, right) => {
    var pivot = array[right];
    var i = left - 1;

    for (var j = left; j < right; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, right);
    return i + 1;
}

const swap = (array, i, j) => {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export default quickSort;