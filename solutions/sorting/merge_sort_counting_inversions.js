function countInversions(arr) {
    let steps = 0;
    function merge(left, right){
        let result = [];
        let leftLength = left.length;
        let rightLength = right.length;
        let leftPointer = 0;
        let rightPointer = 0;
        while(leftPointer < leftLength && rightPointer < rightLength){
            if (left[leftPointer] <= right[rightPointer]){
                result.push(left[leftPointer++]);
            } else {
                steps = steps + leftLength - leftPointer;
                result.push(right[rightPointer++]);
            }
        }

        return {steps: steps, result: result.concat(left.slice(leftPointer)).concat(right.slice(rightPointer))}
    }
    function mergeSort(arr){
        let len = arr.length;
        if (len < 2) {
            return {steps: 0, result: arr};
        }
        let mid = Math.floor(len/2);
        let left = arr.slice(0,mid);
        let right = arr.slice(mid);
        let left_result = mergeSort(left);
        let right_result = mergeSort(right);
        let result = merge(left_result.result, right_result.result)
        return result
    }

    let result = mergeSort(arr)
    return result.steps

}