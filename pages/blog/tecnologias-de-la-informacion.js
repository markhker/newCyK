
import React, { Component } from 'react';
import '../scss/post.scss';
import Link from '../../components/Link';

import MyRawTheme from '../../components/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const styles = {
  mainImage: {
      backgroundImage: 'url(https://storage.googleapis.com/cykloud.appspot.com/static/blog/img/2015-10-20-tecnologias-de-la-informacion.jpg)',
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
                        <span>‘Tecnologías de la información’</span>
                    </h1>

                    <aside className="col-1"> 20.10.15 </aside>

                    <p className="col-18-24 col-m-16-24 col-l-12-24 lead"> 
                        ‘La Tercera Plataforma es la siguiente fase de la evolución de TI y conducirá a un nuevo escenario de negocio, donde las oportunidades se darán en un contexto de innovación y colaboración’
                    </p>
                </div>
        
                <div className="col-22-24 col-s-20-24 col-m-18-24 col-l-15-24 title-content">
        
                    <p>Las tecnologías de la información avanzan a una velocidad cada vez mayor, incluso mas allá de nuestras espectativas, pero abarcando más este tema nos encontramos una nueva plataforma de ésto: La tercera plataforma de las TI. Pero ¿sabes de qué trata?.</p>

                    <p>Antes de hablar de esa plataforma debemos abarcar las anteriores; la primera nace en los 60 con los primeros sistemas informáticos utilizados entre grandes corporaciones y entidades gubernamentales para el procesamiento de información de manera centralizada: los mainframes.</p>

                    <p>La segunda etapa es el cliente/servidor, que son computadoras personales accesibles a empresas pequeñas y empleados que procesan información de una forma descentralizada y autónoma.</p>

                    <p>La Tercera Plataforma es un conjunto de tecnologías y servicios relacionados con las cuatro claves de inversión empresarial: Cloud Computing, Big Data, Social Business y Movilidad; herramientas que se entrelazan y que responden a la necesidad de hacer disponible la información empresarial en cualquier dispositivo, momento y lugar.</p>

                    <p>Ésta etapa surge gracias a la proliferación de dispositivos móviles donde cualquier empresa o consumidor puede tener acceso a la tecnología, lo que permite que la plataforma se construya sobre la computación móvil, redes sociales, servicios en la nube y el big data.</p>

                    <h2>La capacidad de la tercera plataforma</h2>

                    <p>Es claro que para entrar en esta plataforma hay que estar bien informados acerca de qué es lo que ofrece cada uno de éstos servicios, a continuación una breve descripción de cada uno: el Cloud Computing permite la ubicuidad entre clientes y empleados mediante redes de banda ancha, aplicaciones y contenido; el Big Data es el análisis de la información en tiempo real a una gran velocidad; y por último el Social Business que es como interactúan las compañias con sus clientes y empleados.</p>

                    <p>Puede sonar todo ésto muy bueno y práctico, pero también surgen algunas dudas con el simple hecho de poner la información delicada en internet, y eso es la seguridad que pueda tener esa información en éstas máquinas virtuales, para eso hay que tener en cuenta varios retos que hay que lograr como prestador de servicios en la nube:</p>

                    <ul>
                      <li>Confianza en los usuarios. Hay diferentes métodos para garantizar tu información segura en una nube.</li>
                      <li>Garantizar buenas comunicaciones, disponibilidad y rendimiento de los servicios de la nube. La capacidad de integración de sistemas asegura la continuidad del negocio, así como avanzar en la estandarización de las soluciones a través de la escalabilidad y la personalización.</li>
                      <li>Los CIO deberán estar preparados para este cambio y para hacer cosas nuevas. Cloud no es solo una forma de ahorrar costos sino de disponer de más tiempo para dedicarlo a proyectos de transformación; es de hecho una palanca para habilitar la innovación.</li>
                    </ul>

                    <p>Una vez adoptada esta plataforma y la tercerización del cloud, el CIO puede aprovechar para convertirse en un agente de innovación en su organización.</p>

        
                </div>
        
            </div>
        </section>
        
        
      </div>
    );
  }

}
