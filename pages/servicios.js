
import React, { Component } from 'react';
import './scss/services.scss';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import CardMedia from 'material-ui/lib/card/card-media';
import Link from '../components/Link';

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
                <h1 className="col-20-24">Cloud & Kloud es una mezcla de:</h1>
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="Cloud Storage" subtitle="Almacenamiento en la nube, seguro, duradero y muy confiable." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                    
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="Web Apps" subtitle="Aplicaciones a través de internet, flexibles, únicas y de alta demanda." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                          
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="Web Sites" subtitle="Diseño y desarrollo de sitios web a la medida, interfaces y experiencia de usuario." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                          
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="Mobile Apps" subtitle="Diseñamos y creamos tus aplicaciónes para iOS y Andoid." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                          
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="Cloud Marketing" subtitle="Diseño y desarrollo de sitios web a la medida, interfaces y experiencia de usuario." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                          
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="Cloud Hosting" subtitle="Alojamiento de sitios web flexible, de bajo costo y altamente escalable." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                          
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="SEO" subtitle="Posicionamiento web en buscadores, mejora, diagnóstico y ejecución." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                          
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="CDN" subtitle="Distribución mundial de contenido, elástico y de muy alta disponibilidad." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                          
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="Big Data" subtitle="Análisis e interpretación rápido y rentable de grandes cantidades de datos." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                          
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="Cloud Apps" subtitle="Google Aps For Work, servicios profesionales para tu empresa." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                          
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="Virtualization" subtitle="Cómputo en la nube de capacidad elástica y a través de internet." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                          
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="CRM" subtitle="Ventas inteligentes y rápidas, soluciones avanzadas e incremento de productividad." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                          
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="ERP" subtitle="Solución 360 para la administración total de tu empresa." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                          
                    <Card className="col-18-24 col-m-9-24 col-l-7-24 paper"
                            linkButton={true}
                            href="/servicio-"
                            onClick={Link.handleClick} zDepth={3}
                            >
                        <CardMedia
                          overlay={<CardTitle title="Consulting" subtitle="Consultoría para toma de desiciones basadas en la nube." />}>
                          <img src="http://lorempixel.com/600/337/nature/" />
                        </CardMedia>
                    </Card>
                    
            </div>
        </section>
      </div>
    );
  }

}
