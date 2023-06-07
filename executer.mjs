const findAvgExecTime = (sortingAlgo, numbers, times) => {
    let avgExecutionTime = 0;
    for (let i = 0; i < times; i++) {

        let startTime = new Date().getTime();

        sortingAlgo(numbers);

        let endTime = new Date().getTime();

        let executionTime = endTime - startTime; // Calculate the execution time
        avgExecutionTime += executionTime;
    }
    return avgExecutionTime / times;
};

export default findAvgExecTime;