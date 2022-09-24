// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// 1. Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
    const personalData = {
        nombre: 'Mariangelica',
        apellido: 'Rodriguez',
        edad: 31,
        altura: 1.65,
        eresDesarrollador: true
    };

// 2.  Una variable que obtenga tu edad a partir del objeto anterior
    const age = personalData.edad;

// 3. Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
    const objList = [ 
        { ...personalData},
        {
            nombre: 'Victoria',
            apellido: 'Varona',
            edad: 26,
            altura: 1.60,
            eresDesarrollador: true
        },
        {
            nombre: 'Miguel',
            apellido: 'Varona',
            edad: 30,
            altura: 1.78,
            eresDesarrollador: true
        }
    ];

// 4.  Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
    const allObj = [ ...objList ];
    const objSort = allObj.sort((a, b) => b.edad - a.edad);