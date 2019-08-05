function makeAnagram(a, b) {
    let matches = 0;
    let total_matches = 0;
    let a_freq = {};
    let b_freq = {};
    let a_arr = a.split("");
    let b_arr = b.split("");
    for(let i = 0 ; i<a_arr.length;i++){
        if(a_freq[a_arr[i]]){
            a_freq[a_arr[i]]++
        } else {
            a_freq[a_arr[i]] = 1
        }
    }
    for(let i = 0 ; i<b_arr.length;i++){
        if(b_freq[b_arr[i]]){
            b_freq[b_arr[i]]++
        } else {
            b_freq[b_arr[i]] = 1
        }
    }
    for(var key in a_freq){
        if(key in b_freq){
            if(a_freq[key]==b_freq[key]){
            matches = a_freq[key]*2
        } else {
            matches = a_freq[key] > b_freq[key] ? b_freq[key] : a_freq[key]
            matches = matches*2
        }
        total_matches = total_matches + matches;
        }
        
    }
    
    return a_arr.length + b_arr.length - total_matches;
}