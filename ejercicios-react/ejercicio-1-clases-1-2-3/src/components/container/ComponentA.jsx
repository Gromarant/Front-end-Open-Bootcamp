import { Contact } from '../../models/Contact.class';
import ComponentB from '../pure/ComponentB.jsx';

export const ComponentA = () => {

    const defaultContact = new Contact( 'Richard', 'Branson', 'richardbrand@virgingroup.com', true );

  return (
    <>
        <ComponentB contact={ defaultContact }/>
    </>
  )
}
