function maximumToys(prices, budget) {
    let toys_count = 0;
    for(let i = 0; i<prices.length;i++){
        for(let j=i+1; j<prices.length;j++){
            if(prices[j]<prices[i]){
                let tmp = prices[j];
                prices[j]=prices[i]
                prices[i]=tmp;
            }
        }
        if(budget-prices[i]>0 && budget >= prices[i]){
            toys_count = toys_count +1;
            budget = budget - prices[i]
        } else {
            return toys_count;
        }
    }
    return toys_count;
}

