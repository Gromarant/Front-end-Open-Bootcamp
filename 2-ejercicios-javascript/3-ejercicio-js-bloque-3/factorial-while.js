function factorialWile(number) {
    let factorNumber = number;
    if( number === 0 || number === 1) {
        return 1;
    }
    while( number > 1) {
        number--;
        factorNumber = factorNumber * number;
    }
    return factorNumber;
}

console.log( factorialWile(10) );