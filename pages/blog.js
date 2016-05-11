
import React, { Component } from 'react';
import './scss/blog.scss';
import Link from '../components/Link';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import ActionLaunch from 'material-ui/lib/svg-icons/action/launch';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';

import MyRawTheme from '../components/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const styles = {
  cardTitle: {
    color: '#08a6d6',
    fontSize: 2.5+'rem',
    fontWeight: 300,
    textShadow: '1px 1px 1px #000',
  },
  cardSubtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 1+'rem',
  },
  text: {
    fontSize: 1.5+'rem',
  },
  action: {
    float: 'right',
    marginRight: 1+'rem',
    marginBottom: 2+'rem',
  },
};

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class extends Component {

  render() {
    return (
      <div>
        <header className="blog-header">
            <div className="main-logo">
            <a href="/"><img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/logo.png" alt="Logo C&K" /></a>
            </div>
            <h1>Blog</h1>
        </header>
        
        <section className="col-1 blog-content">
            <div className="col-20-24 col-s-18-24 col-m-16-24 col-l-22-24">
        
        
        
              <Card className="paper col-1 col-l-10-24" zDepth={2}>
                <CardMedia overlay={<CardTitle 
                title="Tu empresa en la nube" 
                subtitle="Oportunidades a tu alcance – 18/11/15" 
                titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />}>
        
                  <img src="https://storage.googleapis.com/cykloud.appspot.com/static/blog/img/2015-11-18-tu-empresa-en-la-nube.jpg" />
        
                </CardMedia>
                <CardHeader
                  title="Marlon Karim"
                  subtitle="CEO"
                  avatar="https://s.gravatar.com/avatar/cb92c9693c378c44533b2f48b50959aa?s=80"
                />
                <CardText style={styles.text} >
        
                  Cuando hablamos de ‘La Nube’ hacemos referencia al <strong>Cloud Computing,</strong> nombre bajo el cual se conoce al conjunto de <strong>procesamiento y almacenamiento masivo de datos</strong> del usuario y archivos importantes.
        
                </CardText>
                <CardActions>
                  <RaisedButton label="Leer "
                    backgroundColor ="#08a6d6"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionLaunch />}
                    linkButton={true}
                    style={styles.action}
                    href="/blog/tu-empresa-en-la-nube"
                    onClick={Link.handleClick}/>
        
                </CardActions>
              </Card>
        
        
        
              <Card className="paper col-1 col-l-10-24" zDepth={2}>
                <CardMedia overlay={<CardTitle 
                title="La seguridad en la nube; un reto para los proveedores" 
                subtitle="Innovación y competitividad – 10/11/15" 
                titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />}>
        
                  <img src="https://storage.googleapis.com/cykloud.appspot.com/static/blog/img/2015-11-10-la-seguridad-en-la-nube-un-reto-para-los-proveedores.jpg" />
        
                </CardMedia>
                <CardHeader
                  title="Marlon Karim"
                  subtitle="CEO"
                  avatar="https://s.gravatar.com/avatar/cb92c9693c378c44533b2f48b50959aa?s=80"
                />
                <CardText style={styles.text} >
        
                  El principal obstáculo para que una compañía pueda ser más innovadora y competitiva es la incertidumbre que tienen con respecto a como manejan sus datos los proveedores de nube, ésto ya no es un miedo del cuál preocuparse.
        
                </CardText>
                <CardActions>
                  <RaisedButton label="Leer "
                    backgroundColor ="#08a6d6"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionLaunch />}
                    linkButton={true}
                    style={styles.action}
                    href="/blog/la-seguridad-en-la-nube-un-reto-para-los-proveedores"
                    onClick={Link.handleClick}/>
        
                </CardActions>
              </Card>
        
        
              <Card className="paper col-1 col-l-10-24" zDepth={2}>
                <CardMedia overlay={<CardTitle 
                title="4 razones para contratar Gestión de Infraestructura Cloud" 
                subtitle="Migración a la nube – 09/11/15" 
                titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />}>
        
                  <img src="https://storage.googleapis.com/cykloud.appspot.com/static/blog/img/2015-11-09-4-razones-para-contratar-gestion-de-infraestructura-cloud.jpg" />
        
                </CardMedia>
                <CardHeader
                  title="Marlon Karim"
                  subtitle="CEO"
                  avatar="https://s.gravatar.com/avatar/cb92c9693c378c44533b2f48b50959aa?s=80"
                />
                <CardText style={styles.text} >
        
                  El rol más importante de la Infraestructura cloud es jugado por los proveedores como Amazon y Google, ya que ofrecen a sus usuarios planes hechos a medida de acuerdo a cada tipo de negocio y ajustándose a sus necesidades.
        
                </CardText>
                <CardActions>
                  <RaisedButton label="Leer "
                    backgroundColor ="#08a6d6"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionLaunch />}
                    linkButton={true}
                    style={styles.action}
                    href="/blog/4-razones-para-contratar-gestion-de-infraestructura-cloud"
                    onClick={Link.handleClick}/>
        
                </CardActions>
              </Card>
        
        
              <Card className="paper col-1 col-l-10-24" zDepth={2}>
                <CardMedia overlay={<CardTitle 
                title="7 Oportunidades del Cloud Computing" 
                subtitle="Identifícalas – 09/11/15" 
                titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />}>
        
                  <img src="https://storage.googleapis.com/cykloud.appspot.com/static/blog/img/2015-10-26-7-oportunidades-que-te-pierdes-del-cloud-computing.jpg" />
        
                </CardMedia>
                <CardHeader
                  title="Marlon Karim"
                  subtitle="CEO"
                  avatar="https://s.gravatar.com/avatar/cb92c9693c378c44533b2f48b50959aa?s=80"
                />
                <CardText style={styles.text} >
        
                  Las oportunidades hay que tomarlas, y el Cloud Computing te ofrece muchas de ellas. ¿Sabes cómo identificarlas? ¿Sabes cómo arpovecharlas? Te diré algunas de ellas, y te las estás perdiendo.
        
                </CardText>
                <CardActions>
                  <RaisedButton label="Leer "
                    backgroundColor ="#08a6d6"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionLaunch />}
                    linkButton={true}
                    style={styles.action}
                    href="/blog/7-oportunidades-que-te-pierdes-del-cloud-computing"
                    onClick={Link.handleClick}/>
        
                </CardActions>
              </Card>
        
        
              <Card className="paper col-1 col-l-10-24" zDepth={2}>
                <CardMedia overlay={<CardTitle 
                title="Tecnologías de la información" 
                subtitle="Tercera plataforma – 20/10/15" 
                titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />}>
        
                  <img src="https://storage.googleapis.com/cykloud.appspot.com/static/blog/img/2015-10-20-tecnologias-de-la-informacion.jpg" />
        
                </CardMedia>
                <CardHeader
                  title="Marlon Karim"
                  subtitle="CEO"
                  avatar="https://s.gravatar.com/avatar/cb92c9693c378c44533b2f48b50959aa?s=80"
                />
                <CardText style={styles.text} >
        
                  Las tecnologías de la información avanzan a una velocidad cada vez mayor, incluso mas allá de nuestras espectativas, pero abarcando más este tema nos encontramos una nueva plataforma de ésto: La tercera plataforma de las TI. Pero ¿sabes de qué trata?
        
                </CardText>
                <CardActions>
                  <RaisedButton label="Leer "
                    backgroundColor ="#08a6d6"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionLaunch />}
                    linkButton={true}
                    style={styles.action}
                    href="/blog/tecnologias-de-la-informacion"
                    onClick={Link.handleClick}/>
        
                </CardActions>
              </Card>
        
        
              <Card className="paper col-1 col-l-10-24" zDepth={2}>
                <CardMedia overlay={<CardTitle 
                title="El valor del cloud computing" 
                subtitle="El camino correcto – 20/10/15" 
                titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />}>
        
                  <img src="https://storage.googleapis.com/cykloud.appspot.com/static/blog/img/2015-10-20-el-valor-del-cloud-computing.jpg" />
        
                </CardMedia>
                <CardHeader
                  title="Marlon Karim"
                  subtitle="CEO"
                  avatar="https://s.gravatar.com/avatar/cb92c9693c378c44533b2f48b50959aa?s=80"
                />
                <CardText style={styles.text} >
        
                  Me estaba acechando la idea de definir “cloud computing”, pero no creo que sea necesario. Independientemente de lo que la gente piensa que es, siempre concuerdan en lo que creen que les dará: agilidad, reducción de costos, y un pase al futuro.
        
                </CardText>
                <CardActions>
                  <RaisedButton label="Leer "
                    backgroundColor ="#08a6d6"
                    labelPosition="before"
                    primary={true}
                    icon={<ActionLaunch />}
                    linkButton={true}
                    style={styles.action}
                    href="/blog/el-valor-del-cloud-computing"
                    onClick={Link.handleClick}/>
        
                </CardActions>
              </Card>
        
        
        
            </div>
        </section>
        
        
      </div>
    );
  }

}
