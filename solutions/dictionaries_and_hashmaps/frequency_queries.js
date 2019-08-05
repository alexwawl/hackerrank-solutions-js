function getResultArray(dict){
    let keys = Object.keys(dict);
    let result = [];
    for(let i =0; i < keys.length; i++){
        result.push(dict[keys[i]])
    }
    return result
}
function getFreqDict(dict){
    let keys = Object.keys(dict);
    let result = {};
    for(let i =0; i < keys.length; i++){
        let key = dict[keys[i]];
        result[key] = true;
    }
    return result
}

function increaseFreq(freq_dict, current_freq){
    if(freq_dict[current_freq]){
                   freq_dict[current_freq] = freq_dict[current_freq] + 1;
                   freq_dict[current_freq-1] = freq_dict[current_freq-1] ? freq_dict[current_freq-1] - 1 : 0;
    } else {
                   freq_dict[current_freq] = 1;
                   freq_dict[current_freq-1] = freq_dict[current_freq-1] ? freq_dict[current_freq-1] - 1 : 0;
    }
    return freq_dict
}

function decreaseFreq(freq_dict,current_freq){
    if(freq_dict[current_freq]){
                   freq_dict[current_freq] = freq_dict[current_freq] + 1;
                   freq_dict[current_freq+1] = freq_dict[current_freq+1] ? freq_dict[current_freq+1] - 1 : 0;
    } else {
                   freq_dict[current_freq] = 1;
                   freq_dict[current_freq+1] = freq_dict[current_freq+1] ? freq_dict[current_freq+1] - 1 : 0;
    }
    return freq_dict
}
// Complete the freqQuery function below.
function freqQuery(queries) {
    let dict = {};
    let result = [];
    let freq_dict = {}; // key - freq, value - how much elements with that freq.
    for(let i = 0; i<queries.length;i++){
       let action = queries[i][0];
       let number = queries[i][1];
       if(action === 1){
           if(dict[number] && dict[number] > 0){
               dict[number] = dict[number] + 1;
               let current_freq = dict[number];
                freq_dict = increaseFreq(freq_dict, current_freq)
           } else {
               dict[number] = 1
               freq_dict[1] = freq_dict[1] ? freq_dict[1] + 1 : 1
           }
       }
       if(action === 2){
           if(dict[number]){
                dict[number] = dict[number]-1;
                let current_freq = dict[number];
                freq_dict = decreaseFreq(freq_dict, current_freq)
           }
       }
       if(action === 3){
        if(freq_dict[number] && freq_dict[number] >= 0){
            result.push(1)
        } else{
            result.push(0)
        }
       }
    }
    return result
}