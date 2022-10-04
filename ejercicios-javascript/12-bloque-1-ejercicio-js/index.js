const fibonacci = (num) => {
    let base = [0,1];

    for(i = 0; i < num - 2; i++ ){ 
        let increment = base[i] + base[i+1];
        let result = [ ...base, increment];
        base = result;
    };
    return base;
};

fibonacci(16);