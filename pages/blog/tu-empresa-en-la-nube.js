
import React, { Component } from 'react';
import '../scss/post.scss';
import Link from '../../components/Link';

import MyRawTheme from '../../components/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const styles = {
  mainImage: {
      backgroundImage: 'url(https://storage.googleapis.com/cykloud.appspot.com/static/blog/img/2015-11-18-tu-empresa-en-la-nube.jpg)',
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
                        <span>‘Tu Empresa en la Nube’</span>
                    </h1>

                    <aside className="col-1"> 18.11.15 </aside>

                    <p className="col-18-24 col-m-16-24 col-l-12-24 lead"> 
                        ‘Pocas empresas conocen realmente para qué funciona la nube y cuáles son las oportunidades de estar en ella. Vamos a dar un vistazo y aprender cómo aprovecharla al máximo.’ 
                    </p>
                </div>
        
                <div className="col-20-24 col-m-18-24 col-l-15-24 title-content">
        
                    <p>Cuando hablamos de ‘La Nube’ hacemos referencia al <strong>Cloud Computing,</strong> nombre bajo el cual se conoce al conjunto de <strong>procesamiento y almacenamiento masivo de datos</strong> del usuario y archivos importantes.</p>

                    <p>En otras palabras: acceso instantáneo y en cualquier momento a través de internet, desde el lugar donde estés y en todos los dispositivos. Lo mejor de todo es que la gran mayoría de servicios que utilizan este modelo de Cloud Computing, no fueron creados para expertos en informática, sino todo lo contrario, son de fácil acceso y uso para cualquier persona.</p>

                    <p>Las ventajas de la Nube son uno de sus puntos más fuertes, ya hablamos de algunas de ellas en <a href="/blog/7-oportunidades-que-te-pierdes-del-cloud-computing" onClick={Link.handleClick}>este post.</a> Miles de empresas a nivel mundial han simplificado sus procesos de negocios accediendo a la Nube para aprovechar las aplicaciones y servicios que ofrece. Desde plataformas de servicio hasta la posibilidad de facturar directamente en la Nube y realizar firmas digitales gracias al alto nivel de seguridad con el que cuentan.</p>

                    <p>Todos estos puntos a favor nos hacen pensar: “¿Y por qué mi empresa aún no ha aprovechado todas estas ventajas?” Para convencerte todavía más, la implementación de uso para la Nube requiere una inversión de casi 0 recursos para infraestructura y hardware, por lo que representa una opción perfecta y muy atractiva para las PyMES.</p>

                    <p>Otro de los elementos a considerar del Cloud Computing, es la facilidad para que a través de los servicios en la Nube, tengamos contacto con todo nuestro equipo de trabajo estén donde estén. Esto supone una mejora importante en la comunicación interna, optimizando el rendimiento y el trabajo en conjunto. Gracias a los servicios virtuales como éste, su empresa contará siempre con las últimas actualizaciones de software sin costo alguno adicional.</p>

                    <p>Muchos de ustedes se preguntarán: “¿El Cloud Computing Garantiza la integridad de mis datos?”</p>

                    <p>Si, pero depende de cada usuario.</p>

                    <p>El Cloud Computing ofrece herramientas de gestión, cifrado y protección de los datos; muchas de ellas iguales a las que usan en la milicia. Hemos hablado de esto en <a href="/blog/la-seguridad-en-la-nube-un-reto-para-los-proveedores" onClick={Link.handleClick}>este post.</a></p>

                    <p>Es importante conocer los riesgos a los que se enfrentan nuestros datos en la Nube, pero puedo afirmar con certeza que esos datos se encuentran mucho más seguros en la Nube que en un servidor obsoleto y desactualizado en nuestras oficinas. Las brechas de seguridad son creadas por usuarios (empleados y clientes) debido ya sea al desconocimiento o exceso de confianza. Exponiendo (por errores humanos) información personal desde diferentes dispositivos. Claro que existen formas de mitigar estas brechas, pero ese será tema de otro post.</p>

                    <p>Hoy en día debemos seguir la senda de las nuevas tecnologías, una tendencia que se ha ido incrementando de manera exponencial en muchas empresas que pueden representar una enorme competencia a nuestro modelo de negocios. La mejor recomendación que les puedo hacer es siempre evaluar nuestras opciones y oportunidades e ir por ellas, expandirnos a nuevos procedimientos y herramientas que representen una mejoría en los espacios de trabajo en nuestra organización.</p>

                    <p>Evalúa lo que estés pensando y hazlo! Hoy es un buen día para volar hacia la Nube.</p>

        
                </div>
        
            </div>
        </section>
        
        
      </div>
    );
  }

}
