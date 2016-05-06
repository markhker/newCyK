import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Link from '../Link';

const contactStyle = {
  fontSize: 1.5+'rem',
  padding: 2+'rem',
  height:100 +'%',
  lineHeight: 5+'rem',
};

export default class MiniContact extends React.Component {

  render() {
    return (
      <section className="col-1 col-m-12-24 mini-contact">
        <h2 className="col-20-24">Habla con nosotros</h2>
        <p className="col-21-24">Aprende más acerca de lo que hacemos</p>
        <RaisedButton className="button" 
        label="Contáctanos" 
        secondary={true} 
        backgroundColor={'#f7b50c'}
        labelStyle={contactStyle} 
        linkButton={true}
        href="/contacto"
        onClick={Link.handleClick}/>
      </section>
    );
  }
}