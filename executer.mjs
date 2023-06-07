// @desc  Executes the sorting algorithm for (n) times and returns the average execution time
const findAvgExecTime = (sortingAlgo, numbers, times) => {
    try {
        let avgExecutionTime = 0;
        for (let i = 0; i < times; i++) {

            let startTime = new Date().getTime(); // Get the start time in milliseconds

            sortingAlgo(numbers);

            let endTime = new Date().getTime(); // Get the end time in milliseconds

            let executionTime = endTime - startTime; // Calculate the execution time
            avgExecutionTime += executionTime;
        }
        return `${avgExecutionTime / times} ms`;
    }
    catch (error) {
        // Probably exceeded the maximum call stack size
        return error.message;
    }
};

export default findAvgExecTime;