
import React, { Component } from 'react';
import '../scss/post.scss';
import Link from '../../components/Link';

import MyRawTheme from '../../components/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const styles = {
  mainImage: {
      backgroundImage: 'url(https://storage.googleapis.com/cykloud.appspot.com/static/blog/img/2015-10-20-el-valor-del-cloud-computing.jpg)',
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
                        <span>‘El valor del cloud computing’</span>
                    </h1>

                    <aside className="col-1"> 20.10.15 </aside>

                    <p className="col-18-24 col-m-16-24 col-l-12-24 lead"> 
                        ‘He estado fabricando nube ya desde hace mucho tiempo y siempre me he encontrado con un problema muy común, que es que la empresa promedio al buscar adoptar la nube o construir la suya propia, suele hacerlo por las razones equivocadas y en el camino equivocado.’
                    </p>
                </div>
        
                <div className="col-22-24 col-s-20-24 col-m-18-24 col-l-15-24 title-content">
        
                    <p>Me estaba acechando la idea de definir “cloud computing”, pero no creo que sea necesario. Independientemente de lo que la gente piensa que es, siempre concuerdan en lo que creen que les dará: agilidad, reducción de costos, y un pase al futuro.</p>

                    <p>Dicho de otra manera: se mueven más rápido, cuestan menos y patinan hacia el futuro. Por desgracia todavía veo que la mayoría de las empresas se centran en uno sólo de estos aspectos: la reducción de costos; que es posiblemente el menos importante.</p>

                    <p>¿Cual es el común denominador entre la velocidad, el costo y la entrada al futuro? Obtener una ventaja competitiva. Si hoy le preguntamos a cualquier persona, está generalmente de acuerdo en que nos encontramos en una nueva etapa, en la que los modelos de negocio, el uso de la tecnología y la posición del mercado, están en juego. El adagio “renovarse o morir” es ahora ampliamente aplicable incluso en las empresas más grandes; las cuales ahora están haciendo movimientos agresivos en la nube.</p>

                    <p>Todo esto nos lleva a una conclusión:</p>

                    <p><code>El valor principal de la nube es generar una ventaja competitiva.</code></p>

                    <p>Si tu no estás pensando en la nube de esta manera, entonces simplemente estás haciendo mal.</p>

                    <h2>No puedes tomar unos pedazos de nube</h2>

                    <p>Conozco muchas empresas que tratan de “adoptar la nube” mediante  el despliegue de máquinas virtuales bajo demanda usando VMware u OpenStack y luego dicen “lo hemos hecho”. La realidad es que no se pueden tomar unos cuantos pedazos de nube y recojer los beneficios. Si no todo lo contrario. Tienes que ir “all-in the cloud” con el fin de crear y mantener una ventaja competitiva. Para mantenerte relevante. Para que patines hacia el futuro.</p>

                    <p>Estas son la señales de alerta que indican si lo estás haciendo mal o tratas de tomar pedazos de nube:</p>

                    <ul>
                      <li>Estás tratando de conseguir “máquinas virtuales baratas”.</li>
                      <li>La reducción de los “costos de centros de datos” es lo más importante para tus ejecutivos.</li>
                      <li>Estás “haciendo nube privada primero y nube pública después”.</li>
                      <li>Pides a tus equipos participar en tácticas dilatorias.</li>
                      <li>Te centras en “más automatización” para aplicaciones de segunda plataforma.</li>
                      <li>Piensas que “la tercera plataforma” es una “pequeña fracción” de las necesidades de tu aplicación.</li>
                    </ul>

                    <p>El éxito en la nube significa hacer la TI más relevante para tu negocio a través de las ventajas competitivas. Ventajas competitivas significa velocidad, baja TCO y mirar hacia el futuro. Significa no tener miedo a cambiar de plataforma tus aplicaciones clave. Significa extraer el máximo valor de tus datos. Significa mirar en los pioneros de aplicaciones para la nube, los patrones que podrían ser relevantes para tu negocio.</p>

                    <h2>Tu viaje en la Nube</h2>

                    <p>Si vas a hacerlo, hazlo bien. Implementando tus máquinas virtuales y diciendo un día que no es suficiente. Hacer un par de proyectos DevOps o desplegar algunos NoSQL no es suficiente. Tienes que jugar para ganar y eso significa traer a tu equipo ejecutivo a bordo, ser educador e instigador. Explicar, volver a explicar y explicarlo de nuevo. Adaptarse o morir ya no es sólo una frase, es una realidad de nuestros tiempos.</p>

                    <p>Repite conmigo: “el ahorro de costes es un efecto secundario”. Dilo una y otra vez hasta grabarlo en tu mente.</p>

                    <p>Luego salir, y lograr que se haga.</p>

        
                </div>
        
            </div>
        </section>
        
        
      </div>
    );
  }

}
