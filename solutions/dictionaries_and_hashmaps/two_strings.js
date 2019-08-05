// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    var s1_set = {}
    for(var i=0;i<s1.length; i++){
        s1_set[s1[i]] = 1;
    }
    for(var i =0; i<s2.length;i++){
        if(s2[i] in s1_set){
            return 'YES'
        }
    }
    return 'NO'
}