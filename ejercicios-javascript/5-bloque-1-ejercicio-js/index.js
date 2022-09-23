// Una variable que contenga tu altura en centímetros (entero)
    let centHeight = parseInt(1.65 * 1000);
    let HeightCent = 1.65 * 1000;

// Una variable que contenga tu altura en metros (número de coma flotante)
    let metHeight = parseFloat(centHeight/1000);
    let heightMet = 1650 / 1000;

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
    let weight = parseFloat(74.5);
    let weight2 = 74500 / 1000;

// Una variable que contenga tu altura en metros redondeada hacia arriba
    let heightInt = Number(heightMet.toFixed(0));

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
    let weightRound = parseInt(weight2);

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
    let maxValue =  Number.MAX_VALUE + 1 === Number.MAX_VALUE;