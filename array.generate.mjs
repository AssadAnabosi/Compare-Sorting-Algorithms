export const sortedArray = (size) => {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array;
}

export const randomArray = (size) => {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * size));
    }
    return array;
}

export const controlledArray = (size) => {
    // floor the .75 of the size
    const MAX_SIZE = Math.floor(size * 0.75);
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * MAX_SIZE));
    }
    return array;
}

export const reversedArray = (size) => {
    const array = [];
    for (let i = size - 1; i >= 0; i--) {
        array.push(i);
    }
    return array;
}