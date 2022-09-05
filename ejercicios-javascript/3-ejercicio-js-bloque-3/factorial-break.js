function factorialBreak(number) {
    let factorNumber = number;
    while( number > 1) {
        number--;
        factorNumber = factorNumber * number;
        if (  number === 0 || number === 1 ) {
            break;
        }
    }
    return factorNumber;
}
console.log( factorialBreak(10) );
