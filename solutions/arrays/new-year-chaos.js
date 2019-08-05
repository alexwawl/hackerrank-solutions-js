// Complete the minimumBribes function below.
function minimumBribes(q) {
    var bribe = 0;
    var chaotic = false;
    for(var i=0; i<q.length;i++){
        if(q[i]-(i+1)>2){
            chaotic = true;
            break;
        }
        for(var j=Math.max(0,q[i]-2); j<i; j++){
            if(q[j] > q[i]){
                bribe++;
            }
        }
    }
    if(chaotic){
        console.log("Too chaotic")
    } else {
        console.log(bribe)
    }
}