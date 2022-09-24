// Crea un archivo JS que contenga las siguientes líneas
// 1. Una función sin parámetros que devuelva siempre "true"
    function withoutparam() {
        return true;
    };
    withoutparam();

// 2. Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
    function myAsync() {}
    const myPromise = new Promise((resolve, reject ) => (true) ? resolve() : reject() ) ;

    const response =console.log( "Hola soy una promesa" );
    let timeout;

    myPromise
        .then( () => timeout = setTimeout(response, 5000))
        .catch( () => "Error");

// 3. Una función generadora de índices pares automáticos
    function* pairNumbers() {
        let pair = 2;
        while ( pair <= 18 ) {
                yield pair += 2;
            };
    };

    let generator = pairNumbers();

    console.log(generator.next().value)
    console.log(generator.next().value)
    console.log(generator.next().value)
    console.log(generator.next().value)
    console.log(generator.next().value)
    console.log(generator.next().value)
    console.log(generator.next().value)
    console.log(generator.next().value)
    console.log(generator.next().value)