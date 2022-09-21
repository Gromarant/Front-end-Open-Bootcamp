// Crea un archivo JS que contenga las siguientes líneas
// 1. Una variable que contenga la lista de la compra (mínimo 5 elementos)
    let shoppingList = [ 'huevos', 'leche', 'refresco', 'pan', 'queso', 'fruta', 'granos'];

// 2. Modifica la lista de la compra y añádele "Aceite de Girasol"
    shoppingList.push('Aceite de Girasol');

// 3. Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
    shoppingList.pop();

//  4. Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
    let favoriteMovies = [
        {titulo: 'Porco Rosso', director: 'Hayao Miyazaki', fecha: 01/09/1994},
        {titulo: 'Mujercitas', director: 'Greta Gerwig', fecha: 25/12/2019},
        {titulo: 'Orgullo y prejuicio', director: 'Joe Wright', fecha: 10/02/2006}
    ];

// 5. Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
    const AfterJanuaryFirst = favoriteMovies.find( After => After.fecha > 01/01/2010 );

// 6. Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
    const directors = favoriteMovies.map( direct => direct.director);

// 7. Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
    const titles = favoriteMovies.map( title => title.titulo);

// 8. Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
    const directAndTitleConcat = directors.concat(titles);

// 9. Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
    const directAndTitleSpread = [...directors, ...titles];