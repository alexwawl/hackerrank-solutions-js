// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    var magazine_set = {}
    for(var i = 0; i< magazine.length; i++){
        if(magazine[i] in magazine_set){
            magazine_set[magazine[i]] = magazine_set[magazine[i]] + 1 
        } else {
            magazine_set[magazine[i]] = 1;
        }
    }
    for(var i = 0; i<note.length; i++){
        if(note[i] in magazine_set){
            if(magazine_set[note[i]] > 0){
                magazine_set[note[i]] = magazine_set[note[i]] - 1;
            } else{
                return 'No'
            }
        } else {
            return 'No'
        }
    }
    return 'Yes'
}