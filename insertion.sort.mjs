const insertionSort = (array) => {
    var len = array.length;
    for (var i = 1; i < len; i++) {
        var key = array[i];
        var j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

export default insertionSort;