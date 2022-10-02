class Estudiante {
    constructor ( nombre ) {
        this.nombre = 'nombre',
        this.asignaturas = [ 'Javascript', 'HTML', 'CSS' ]
    };
};

const nuevoEstudiante = new Estudiante( 'Mariangelica' );
const obtenDatos = () => nuevoEstudiante;

obtenDatos();