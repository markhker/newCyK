
import React, { Component } from 'react';
import './scss/grid.scss';
import './scss/Main.scss';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import NavigationChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';
import CardText from 'material-ui/lib/card/card-text';
import Link from '../components/Link';


const overflow = {
  overflow: 'visible',
  marginBottom: 5+'rem',
};

const style = {
  marginLeft: 85+'%',
  marginTop: 3+'%',
  transform: 'translateY(60%)',
  zIndex: 9999,
};

const CardOne = () => (
  <Card style={overflow}>
  <CardMedia>
      <img
        srcSet="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/home-1-1024.jpg  1024w, 
                https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/home-1-768.jpg  960w,
                https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/home-1-480.jpg   480w"
        src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/home-1-768.jpg"
        alt="Somos Cloud & Kloud" />
    </CardMedia>
    <CardTitle title="Quiénes somos" subtitle="Tecnología innovadora" />
    <CardText>
      Somos un equipo de expertos en tecnologías en la nube. Una empresa de desarrollo y tecnología innovadora en Cloud Computing capaz de llevar a tu compañía al siguiente nivel.
    </CardText>
    <CardActions>
      <FloatingActionButton style={style} linkButton={true}
      href="/nosotros/"
      onClick={Link.handleClick}>
        <NavigationChevronRight />
      </FloatingActionButton>
    </CardActions>
  </Card>
);

const CardTwo = () => (
  <Card style={overflow}>
  <CardMedia>
      <img
        srcSet="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/home-2-1024.jpg  1024w, 
                https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/home-2-768.jpg  960w,
                https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/home-2-480.jpg   480w"
        src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/home-2-768.jpg"
        alt="Somos Cloud & Kloud" />
    </CardMedia>
    <CardTitle title="Qué hacemos" subtitle="Soluciones estratégicas" />
    <CardText>
      Ayudamos a tu organización a adaptarse a este nuevo mundo, llegar más lejos y obtener todos los beneficios del Cloud Computing. Nos esforzamos y enfocamos en la acción.
    </CardText>
    <CardActions>
      <FloatingActionButton style={style} linkButton={true}
      href="/servicios/"
      onClick={Link.handleClick}>
        <NavigationChevronRight />
      </FloatingActionButton>
    </CardActions>
  </Card>
);


export default class extends Component {

  render() {
    return (
    <div>
      <header className="home-header">
        <h1>Cloud<br/>Solutions</h1>
      </header>
      
      <hr className="styled" />
      
      <section className="col-1 home-section-1">
        <h1 className="col-20-24">Cloud & Kloud es una mezcla de:</h1>
      
        <article className="col-16-24 col-m-10-24 col-l-6-24">
            <div className="icon">
                <i className="flaticon-gears"></i>
            </div>
            <h2>Tecnología</h2>
            <p>Tenemos habilidades muy específicas y mejoradas con la experiencia. Especialistas en Cloud Computing.</p>
        </article>
        
        <article className="col-16-24 col-m-10-24 col-l-6-24">
            <div className="icon">
                <i className="flaticon-pulse"></i>
            </div>
            <h2>Pasión</h2>
            <p>Nos apasiona trabajar con gente emprendedora y organizaciones que produzcan trabajos excepcionales.</p>
        </article>
        
        <article className="col-16-24 col-m-10-24 col-l-6-24">
            <div className="icon">
                <i className="flaticon-water"></i>
            </div>
            <h2>Simplicidad</h2>
            <p>Nosotros existimos para enriquecer la calidad de vida de las personas, organizaciones y empresas.</p>
        </article>
        
      </section>
      
      <section className="col-1 home-section-2">
        <div className="col-20-24 col-m-10-24 col-l-8-24">
            <CardOne />
        </div>
        <div className="col-20-24 col-m-10-24 col-l-8-24">
            <CardTwo />
        </div>
      </section>
      
      
      
      
    </div>
    );
  }

}
















