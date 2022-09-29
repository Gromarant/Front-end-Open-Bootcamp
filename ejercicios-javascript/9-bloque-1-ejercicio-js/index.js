const logger = require('./logger/index');

const cartings = ( age, hasLicense) => {
    if (age === 18 || hasLicense === true ) {
        return 'Congrats, enjoy driving, and be carefully';
    }  if (age === 16 || hasLicense === true ) {
        return 'You will have to wait a couple of years';
    } if (age === 18 || hasLicense === false ) {
        return 'You must have drive license';
    } if (age === 16 || hasLicense === false ) {
        return 'You will have to wait two years and have drive license';
    }
    throw "You must be eighteen years old or older and has a drive's license valid";
}  
    
let canDrive;

try {
    canDrive = cartings ( 6, false );
} catch ( e ) {
    console.error( `${e}` );
};

logger.error( cartings( 6, false ));