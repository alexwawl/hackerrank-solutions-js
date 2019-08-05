function countSwaps(a) {
    let count_swaps = 0;
    for(let i = 0 ; i<a.length;i++){
        for(let j = 0; j<a.length-i-1;j++){
            if(a[j]>a[j+1]){
                let temp = a[j+1];
                a[j+1] = a[j];
                a[j] = temp;
                count_swaps++
            }
        }
    }
    console.log("Array is sorted in "+ count_swaps +" swaps.")
    console.log("First Element: "+a[0]);
    console.log("Last Element: "+a[a.length-1]);
}