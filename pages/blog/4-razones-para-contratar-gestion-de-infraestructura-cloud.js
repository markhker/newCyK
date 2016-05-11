
import React, { Component } from 'react';
import '../scss/post.scss';
import Link from '../../components/Link';

import MyRawTheme from '../../components/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const styles = {
  mainImage: {
      backgroundImage: 'url(https://storage.googleapis.com/cykloud.appspot.com/static/blog/img/2015-11-09-4-razones-para-contratar-gestion-de-infraestructura-cloud.jpg)',
  },
};

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class extends Component {

  render() {
    return (
      <div>
        <header className="post-header">
            <span className="img webfeedsFeaturedVisual" style={styles.mainImage} />
            <div className="main-logo">
            <a href="/"><img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/logo.png" alt="Logo C&K" /></a>
            </div>
        </header>
        
        <section className="col-1 blog-content">
            <div className="col-1">

                 <div className="col-1 title-group">
                    <h1 className="special">
                        <span>‘4 razones para contratar Gestión de Infraestructura Cloud’</span>
                    </h1>

                    <aside className="col-1"> 09.11.15 </aside>

                    <p className="col-18-24 col-m-16-24 col-l-12-24 lead"> 
                        ‘Tu empresa debe hacerse esta pregunta ¿Cuándo y cómo migraré a la nube?’
                    </p>
                </div>
        
                <div className="col-22-24 col-s-20-24 col-m-18-24 col-l-15-24 title-content">
        
                    <p>El rol más importante de la Infraestructura cloud es jugado por los proveedores como Amazon y Google, ya que ofrecen a sus usuarios planes hechos a medida de acuerdo a cada tipo de negocio y ajustándose a sus necesidades.</p>

                    <p>Sin duda llevan a cabo su papel exitosamente. Sin embargo, debido a que el núcleo del negocio de estos proveedores Cloud es precisamente la Infraestructura, sus usuarios deben complementar tales servicios con <strong>soluciones de gestión Cloud.</strong></p>

                    <h2>¿Qué pasa después de contratar un servicio de Infraestructura Cloud?</h2>

                    <p>Entonces, <strong>¿Quién gestiona y garantiza posteriormente el buen rendimiento y disponibilidad de la plataforma?</strong></p>

                    <p>Aunque a veces los proveedores de Infraestructura Cloud proporcionan servicios y herramientas para gestionar su Infraestructura, son facturados adicionalmente y no siempre cubren todo el ciclo de vida que tiene la administración de plataformas Cloud.</p>

                    <p>Es aquí donde acuden a nuestra ayuda los “Cloud Service Management Providers” o <strong>Proveedores de Gestión de Infraestructura Cloud</strong> como <a href="/" onClick={Link.handleClick}>Cloud &amp; Kloud</a>. Estas empresas son expertas en la <strong>gestión de Infraestructura Cloud, administran y controlan el funcionamiento de las plataformas</strong> una vez elegido el proveedor de Infraestructura Cloud. Este tipo de empresas cuentan con un equipo calificado y expertos en Cloud Computing que te ayudarán a cumplir los siguientes objetivos:</p>

                    <h2>Afrontar la demanda elástica de tu negocio</h2>

                    <p>Crece o disminuye la capacidad de tu Infraestructura Cloud según la demanda que necesite tu plataforma en cualquier momento, consiguiendo un rendimiento fluido y sin interrupciones. Evita la capacidad no utilizada gracias a un proceso de auto-escalado preciso y flexible; el cual también te permite ahorrar los costes que conllevaría pagar más de lo que necesitas.</p>

                    <h2>Migrar a la nube sin costes en el servicio</h2>

                    <p><a href="/" onClick={Link.handleClick}>Cloud &amp; Kloud</a> es un proveedor experto en la gestión de Infraestructura Cloud, te ayuda a definir la mejor estrategia y diseño de Infraestructura entre diferentes proveedores Cloud, ofreciéndote la solución que mejor se adapta a tu negocio y elaborándo un riguroso plan de migración que te permitirá minimizar los costes de servicio.</p>

                    <h2>Exprime al máximo la capacidad de tus plataformas</h2>

                    <p>Los “Cloud Service Management Providers” analizan el rendimiento de tu plataforma o aplicación para optmizarla al máximo y poder adaptarla al Cloud. También realizan pruebas exahustivas para conocer la capacidad y los límites de tu aplicación con el fin de mejorar la disponibilidad de tu negocio.</p>

                    <h2>Tus sistemas controlados y disponibles 24x7</h2>

                    <p><strong>Monitorizan y gestionan tus plataformas y aplicaciones 24x7</strong> y garantizan la máxima dsiponibilidad de tu negocio, resolviendo el 80% de las incidencias en un tiempo récord de 5 minutos.</p>

                    <p>Contratando los servicios de un Proveedor de gestión de Infraestructura Cloud, el usuario cuenta con la experiencia necesaria durante todo el ciclo de vida que una plataforma Cloud Requiere, desde la fase inicial de diseño e implementación, hasta el posterior mantenimiento y gestión.</p>

                    <p>¿Tu empresa ya está en la nube?</p>

        
                </div>
        
            </div>
        </section>
        
        
      </div>
    );
  }

}
