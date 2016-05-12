
import React, { Component } from 'react';
import './scss/services.scss';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import CardMedia from 'material-ui/lib/card/card-media';
import Link from '../components/Link';

import MyRawTheme from '../components/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const style = {
  color: '#fff',
  fontSize: 1.35+'rem',
};

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class extends Component {

  render() {
    return (
      <div>
        <header className="services-header">
            <div className="main-logo">
            <a href="/"><img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/logo.png" alt="Logo C&K" /></a>
            </div>
            <h1>Servicios</h1>
        </header>
        
        <section className="col-1 services-section-1">
            <div className="col-1 col-s-20-24 col-m-22-24 col-l-20-24">
                <h1 className="col-20-24">Qué te ofrece C&K:</h1>
      
                    <a href="/cloud-storage" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}>
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Almacenamiento en la nube, seguro, duradero y muy confiable." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-storage.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
        
                    <a href="/cloud-computing" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Alta capacidad computacional flexible, de bajo costo y altamente escalable." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-computing.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
                          
                    <a href="/web-development" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Diseño y desarrollo de sitios web a la medida, interfaces y experiencia de usuario." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-web.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
                          
                    <a href="/application-development" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Diseñamos y creamos tus aplicaciónes para iOS y Andoid." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-app.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
                          
                    <a href="/digital-marketing" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Diseño y desarrollo de sitios web a la medida, interfaces y experiencia de usuario." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-mkt.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
                          
                    <a href="/seo-technology" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Posicionamiento web en buscadores, mejora, diagnóstico y ejecución." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-seo.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
                          
                    <a href="/content-delivery-network" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Distribución mundial de contenido, elástico y de muy alta disponibilidad." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-cdn.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
                          
                    <a href="/big-data" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Análisis e interpretación rápido y rentable de grandes cantidades de datos." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-big.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
                          
                    <a href="/apps-for-work" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Google Apps For Work, servicios profesionales para tu empresa." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-work.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
                          
                    <a href="/healtcare" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Soluciones para los grandes retos médicos que confronta la sociedad." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-healt.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
                          
                    <a href="/customer-relationship-management" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Ventas inteligentes y rápidas, soluciones avanzadas e incremento de productividad." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-crm.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
                          
                    <a href="/enterprise-resource-planner" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Solución 360 para la administración total de tu empresa." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-erp.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
                          
                    <a href="/consulting" onClick={Link.handleClick} className="col-18-24 col-m-9-24 col-l-7-24 paper">
                    <Card zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle subtitleStyle={style} subtitle="Consultoría para toma de desiciones basadas en la nube." />}>
                          <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-consulting.jpg" />
                        </CardMedia>
                    </Card>
                    </a>
                    
            </div>
        </section>
      </div>
    );
  }

}
