// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    var swap = 0;
    for(var i = 0; i < arr.length; i ++){
        while(arr[i] !== i+1){
            var temp = arr[arr[i]-1];
            arr[arr[i]-1] = arr[i];
            arr[i] = temp;
            swap++
        }
    }
    return swap
}