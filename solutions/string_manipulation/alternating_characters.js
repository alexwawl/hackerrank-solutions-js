function alternatingCharacters(s) {
    let pointer = 0;
    let remove_count = 0;
    while(pointer < s.length-1){
        if(s[pointer] === s[pointer+1]){
            remove_count++
        }
        pointer++
    }
    return remove_count
}