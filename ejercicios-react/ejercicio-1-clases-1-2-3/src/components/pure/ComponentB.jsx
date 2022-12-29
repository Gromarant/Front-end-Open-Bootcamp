import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';

const ComponentB = ({ contact }) => {
  return (
    <>
        <h2>Nombre: { contact.nombre}  </h2>
        <h2>Apellido: { contact.apellido } </h2>
        <p>Email: { contact.email } </p>
        <p>Estado: { contact.conectado ? 'Contacto En Línea' : 'Contacto No Disponible' } </p>
    </>
  )
}

ComponentB.propTypes = {
    contact: PropTypes.instanceOf( Contact )
}

export default ComponentB;