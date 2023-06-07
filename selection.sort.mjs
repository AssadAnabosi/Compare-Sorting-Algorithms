function selectionSort(array) {
    var len = array.length;
    for (var i = 0; i < len - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap elements
            var temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}

export default selectionSort;