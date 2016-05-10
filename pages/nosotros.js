
import React, { Component } from 'react';
import './scss/about.scss';
import Paper from 'material-ui/lib/paper';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Link from '../components/Link';

import MyRawTheme from '../components/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const style = {
  fontSize: 1.5+'rem',
  fontWeight: 200,
};

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class extends Component {

  render() {
    return (
      <div>
        <header className="about-header">
            <div className="main-logo">
            <a href="/"><img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/logo.png" alt="Logo C&K" /></a>
            </div>
            <h1>Nosotros</h1>
        </header>
        
        <section className="col-1 about-section-1">
            <div className="col-1 col-s-20-24 col-m-22-24 col-l-20-24">
                <h1 className="col-20-24">"We are your conection with the Cloud Technologies"</h1>
                    
                <Paper className="col-20-24 col-m-10-24 col-l-7-24 paper" zDepth={1}>
                    <CardTitle title="Quiénes" subtitle="Expertos" />
                    <CardText style={style}>
                      Cloud & Kloud, somos un equipo de expertos en cloud computing. Nuestros compañeros trabajan por nuestro Qué y nuestro Por qué. Nos apasiona trabajar con gente emprendedora y organizaciones que produzcan trabajos excepcionales.
                    </CardText>
                </Paper>  
        
                <Paper className="col-20-24 col-m-10-24 col-l-7-24 paper" zDepth={1}>
                    <CardTitle title="Qué" subtitle="Creamos" />
                    <CardText style={style}>
                      Diseñamos las mejores soluciones de Cloud Computing a la medida de tu empresa. Ayudamos a tu organización a adaptarse a las nuevas tecnologías de la información, llegar más lejos y obtener todos los beneficios que la nube te ofrece.
                    </CardText>
                </Paper>
        
                <Paper className="col-20-24 col-m-10-24 col-l-7-24 paper" zDepth={1}>
                    <CardTitle title="Por qué" subtitle="Resultados" />
                    <CardText style={style}>
                      Es simple. Nosotros existimos para enriquecer la calidad de vida de organizaciones y empresas. No se trata solo de hacer algo que se vea bien. Nos esforzamos y enfocamos en la acción, que genera resultados y se convierte en un cambio efectivo.
                    </CardText>
                </Paper>
            </div>
        </section>
        
        <section className="col-1 standards">
            <article className="col-1">
                 <div className="col-20-24 col-m-10-24 col-l-8-24 first">
                     <h2>Nuestras<br />Normas</h2>
                     <div className="standard">
                         <h3>Personas sobre Ganancias</h3>
                         <h4>No se trata de dinero</h4>
                         <p>Nuestra norma de oro son las relaciones. Queremos trabajar con personas increíbles. Porque, para nosotros, el éxito se mide en experiencias positivas, no en la línea de fondo. Por eso, nos esforzamos en rodearnos de ambos inteligentes y apasionados miembros de equipo y clientes, esos que harán crecer nuestras mentes y corazones y no sólo nuestras carteras.</p>
                     </div>
                     <div className="standard">
                         <h3>KISS</h3>
                         <h4>Por que es simple</h4>
                         <p>Nuestras prácticas y soluciones son sencillas, porque sencillo = limpio = comprensible y ejecutable. Nosotros aplicamos este concepto a todos los aspectos del negocio, desde nuestro espacio de trabajo hasta los servicios que ofrecemos. También nos adherimos a la fuerza de la simplicidad cuando diseñamos y codificamos.</p>
                     </div>
                     <div className="standard">
                         <h3>Calidad sobre Cantidad</h3>
                         <h4>Menos es más.</h4>
                         <p>La energía mental tiene un ancho de banda agotable, por lo que concentramos nuestro tiempo y talento en un menor número de proyectos/clientes. Una mayor inversión de nuestra parte ,pero no estamos creando una pequeña fábrica de servicios de IT. Además priorizar la calidad sobre la cantidad apoya nuestros otros valores fundamentales.</p>
                     </div>
                     <div className="standard">
                         <h3>Haz más Preguntas</h3>
                         <h4>Exige mejores respuestas</h4>
                         <p>Creemos que empujar el sobre ayuda a consolidar y defender pensamientos/conceptos, y da nueva forma a la razón. Una idea o concepto fuerte resiste la prueba de estrés o será mejor en la línea de meta por haber sido objeto de escrutinio.</p>
                     </div>
                 </div>
                 <div className="col-20-24 col-m-10-24 col-l-8-24 second">
                     <div className="standard">
                         <h3>Haz lo Mejor</h3>
                         <h4>Siempre hay espacio para mejorar.</h4>
                         <p>Este valor se mantiene constante en nuestras mentes, una intención definida en todos los puntos de contacto de nuestra organización. La llave que impulsa nuestra toma de decisiones y, en última instancia, nuestro producto final. Debido a que cada uno de nosotros acepta el reto de seguir subiendo la escalera de la grandeza.</p>
                     </div>
                     <div className="standard">
                         <h3>Mantenlo Real</h3>
                         <h4>Las personas son personas</h4>
                         <p>Y así es como los tratamos, independientemente de su rango o asociación. Todo el mundo merece respeto, transparencia y honestidad - los tres pilares de cada interacción que tenemos con colegas y clientes. Bono: el trabajo, y la vida en general, se vuelven más fáciles y productivas.</p>
                     </div>
                     <div className="standard">
                         <h3>Nunca Dejes de Aprender</h3>
                         <h4>Rétate a ti mismo.</h4>
                         <p>Cuando niños, éramos alimentados de educación a la fuerza, pero a medida que crecemos, nuestras interacciones académicas son menos frecuentes. A menos que las busques. Animamos a nuestro equipo a aprender: para perseguir sus pasiones, escucharnos unos a otros y acceder a nuevos conocimientos en conferencias, la biblioteca, los blogs y a través de otros medios. Ah, y para hacer más preguntas.</p>
                     </div>
                     <div className="standard">
                         <h3>Trabaja para Vivir</h3>
                         <h4>La vida es primero.</h4>
                         <p>El trabajo en sólo una pieza en el gráfico circular de la vida, y nuestro objetivo es que siga siendo así. Ya que somos tan fuertes como nuestro equipo, les animamos a trabajar duro, jugar duro y descansar duro. Siempre que podemos, les ayudamos a cultivar sus pasiones. Y tenemos en cuenta sus intereses y fortalezas cuando nos ponemos a trabajar. Después de todo, si amas lo que haces, en realidad nunca trabajas.</p>
                     </div>
                 </div>
             </article>
        </section>
      </div>
    );
  }

}
