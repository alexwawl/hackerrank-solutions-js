// Complete the hourglassSum function below.
function hourglassSum(arr) {
    var max_sum = -1000;
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var top = arr[i][j] + arr[i][j+1]+arr[i][j+2];
            var middle = arr[i+1][j+1]
            var bottom = arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]
            max_sum = Math.max(max_sum, top+middle+bottom)
        }
    }
    return max_sum
}