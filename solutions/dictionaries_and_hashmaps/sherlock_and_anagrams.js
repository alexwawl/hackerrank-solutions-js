function getAllSubstrings(str){
    let result = [];
    for(let i = 0; i<str.length;i++){
        for(let j = i+1;j<str.length+1;j++){
            result.push(str.slice(i,j))
        }
    }
    return result;
}

function isAnagram(str_1, str_2) {
    if(str_1.length !== str_2.length) {
        return false;
    }
    let chars_str_1 = str_1.split("");
    let chars_str_2 =  str_2.split("");
    let char_counter = {};
    for(let i = 0; i < chars_str_1.length; i++){
        let key = chars_str_1[i];
        if(char_counter[key]){
            char_counter[key] = char_counter[key] + 1;
        } else {
            char_counter[key] = 1;
        }
    }
    for(let i = 0; i < chars_str_2.length; i++){
        let key = chars_str_2[i];
        if(char_counter[key]){
            char_counter[key] = char_counter[key] - 1;
        } else {
            return false;
        }
    }
    return true
}

function sherlockAndAnagrams(s) {
    let substrings = getAllSubstrings(s);
    let total_anagrams = 0;
    let total_dict_anagrams = 0;
    let anagrams_dict = {}
    for(let i = 0;i<substrings.length;i++){
        for(let j = i+1;j<substrings.length;j++){
            if(isAnagram(substrings[i],substrings[j])){
                total_anagrams = total_anagrams+1
            }
        }
    }
    return total_anagrams
}