// Complete the rotLeft function below.
function rotLeft(array, rotation) {
    //Don't do in-place changes.(or carefully note about it)
    let new_array = array.slice();
    while(rotation > 0){
        let temp = new_array.shift();
        new_array.push(temp)
        rotation = rotation - 1;
    }
    return new_array;
}