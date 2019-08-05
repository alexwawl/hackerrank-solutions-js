// Complete the isValid function below.
function isValid(s) {
    let dict = {};
    let max = 0;
    let min = 0;
    let min_count = 0;
    let max_count = 0;
    for(let i = 0; i<s.length;i++){
        let key = s[i];
        if(dict[key]){
            dict[key]++;
        } else {
            dict[key]=1;
        }
    }
    let values = [];
    for(let key in dict){
        values.push(dict[key])
    }
    min = values.reduce((a,b)=>{return Math.min(a,b)});
    max = values.reduce((a,b)=>{return Math.max(a,b)});
    for (let i = 0; i<values.length;i++){
        if(values[i]===max){
            max_count++;
        }
        if(values[i]===min){
            min_count++;
        }
    }
    if(min==max){
        return "YES"
    }
    if(max_count + min_count != values.length){
        return "NO";
    }
    if(min==1 && min_count==1){
        return "YES"
    }
    if(max_count==1 && max == min+1){
        return "YES"
    }

    return "NO"
}