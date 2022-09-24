// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// 1.  La fecha de hoy
    const today = new Date();

// 2. La fecha de tu nacimiento
    const birth = new Date( 'march 02, 1991');

// 3. Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
    const isLater = today.getTime() > birth.getTime();

// 4. Una variable que contenga el día de tu nacimiento
    const birthDay = birth.getDay();

// 5. Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
    const birthMonth = birth.getMonth();

// 6. Una variable que contenga el año de tu nacimiento (con 4 dígitos)
    const birthYear = birth.getFullYear();