const name = 'Mariangelica';
const lastName = 'Rodriguez';

const obj = {
    name: name,
    lastName: lastName,
}

sessionStorage.setItem( 'obj', JSON.stringify({name: name, lastName: lastName}));
localStorage.setItem( 'obj', JSON.stringify({name: name, lastName: lastName}));

const date = new Date();
const time = date.getTime();
const expiration = time + ( (2 * 1000) * 60 );
date.setTime(expiration);
document.cookie = `newCookie=${obj};expires=${date}`;