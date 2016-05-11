
import React, { Component } from 'react';
import '../scss/post.scss';
import Link from '../../components/Link';

import MyRawTheme from '../../components/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const styles = {
  mainImage: {
      backgroundImage: 'url(https://storage.googleapis.com/cykloud.appspot.com/static/blog/img/2015-10-26-7-oportunidades-que-te-pierdes-del-cloud-computing.jpg)',
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
                        <span>‘7 Oportunidades que te pierdes del Cloud Computing’</span>
                    </h1>

                    <aside className="col-1"> 26.10.15 </aside>

                    <p className="col-18-24 col-m-16-24 col-l-12-24 lead"> 
                        ‘El Cloud Computing le ofrece a tu empresa muchas oportunidades como adelantarse a tus competidores, ofrecer una mejor atención a tus clientes e innovar en tu sector’ 
                    </p>
                </div>
        
                <div className="col-22-24 col-s-20-24 col-m-18-24 col-l-15-24 title-content">
        
                    <p>Las oportunidades hay que tomarlas, y el Cloud Computing te ofrece muchas de ellas. ¿Sabes cómo identificarlas? ¿Sabes cómo arpovecharlas? Te diré algunas de ellas, y te las estás perdiendo.</p>

                    <h2>1.- Prioriza el consumo, no la inversión.</h2>

                    <p>Si en tu empresa decides no utilizar los servicios en la nube en el momento de implementar tu infraestructura de comunicaciones, te resultará imprescindible, como mínimo, realizar una inversión inicial en hardware y software para su construcción, contratar personal cualificado para la implantación y el mantenimiento de dicha infraestructura - en donde se te irá el 70% de tu presupuesto de TI. Teniendo esto presente se puede considerar adecuado contratar servicios en la nube ¿no crees? Y ya que sólo pagas por lo que usas te olvidas de inversiones inciales, contratación de personal y mantenimiento. Financieramente, permite que la estructura de costes de tu empresa sea más flexible y elástica a los cambios (tanto por potencial de crecimiento como por disminución del negocio).</p>

                    <h2>2.- “30 minutos o es gratis…”</h2>

                    <p>Otro gran problema con el que te enfrentas al momento de querer implementar una adecuada infraestructura de TI es el tiempo que inviertes en hacerlo. El proceso de implantación es largo y tedioso e incorpora fases como la planificación y el aprovisionameinto (¿?). Esto dura meses, en promedio. La ventaja de los servicios en la nube es que la infraestructura ya está operativa, y eso disminuye muchísimo el tiempo que tienes que esperar para obtener los servicios que hayas contratado. Dependiendo de los servicios que requieras, hasta en menos de diez minutos podrás estar disfrutando de tu nueva y flamante infraestructura en la nube.</p>

                    <h2>3.- Accede desde la punta del Everest.</h2>

                    <p>Con la proliferación y mejora en las prestaciones de los dispositivos móviles, tus clientes hacen uso de aplicaciones y servicios más potentes y accesibles desde cualquier lugar y en cualquier momento del día. Los servicios en la nube favorecen la movilidad con la que tus empleados realizan su trabajo. En teoría ese aumento de movilidad debería traducirse en un aumento de la productividad de tu empresa.</p>

                    <h2>4.- Efecto de economía de escala.</h2>

                    <p>O como ahorrar en el futuro. La capacidad que poseemos los proveedores de servicios en la nube es mucho mayor que la que necesita cada cliente por separado. En este sentido, y teniendo en cuenta que el hardware y software son más baratos con el tiempo, las ofertas que te puedes encontrar serán más atractivas para ti; y a la vez te darás cuenta que resulta más barato que montar tu propia infraestructura.</p>

                    <p>Si además tomas en cuenta que los servicios en la nube son cada vez más populares y que existe la expectativa de que el número de clientes que contraten estos servicios crezca exponencialmente, es de suponer que a medida que avance el tiempo los servicios sean cada vez más baratos.</p>

                    <h2>5.- Elasticidad</h2>

                    <p>Los recursos de los que haces uso al contratar Cloud Computing están centralizados en las instalaciones del proveedor. Esto posibilita la asignación y liberación de dichos recursos de manera dinámica.</p>

                    <p>A medida que tu empresa demanda más poder de computación, la nube se escala automáticamente para satisfacer ese pico de necesidades, en cuanto disminuya, la nube se escala hacia abajo para que no gastes en servicios que no utilizas.</p>

                    <h2>6.- Capacidad de innovación</h2>

                    <p>En un modelo tradicional a muchas empresas les resulta inviable abordar cualquier proceso de ampliación de negocios por las inversiones hardware/software que requiere la operación en los nuevos mercados. Y eso sin tomar en cuenta el punto 1 de esta lista.</p>

                    <p>La posibilidad de contratar servicios de TI “todo en uno”, permite a las empresas explotar nuevas vías de negocio y favorecer el desarrollo de nuevos mercados. A través de la utilización de la nube, cualquier compañía que desee ampliar su rango de acción, no tendrá que preocuparse de las tecnologías que necesita para el desarrollo de dicha actividad, dedicándose únicamente a utilizar dichas herramientas en su beneficio.</p>

                    <h2>7.- Ayuda al medio ambiente</h2>

                    <p>En estos tiempos los gobiernos (algunos más que otros…) y las entidades internacionales exigen y alientan a las organizaciones a ser mas “verdes”, evitando que sus negocios dañen al medio ambiente. En este sentido es interesante analizar la nube como una manera de ayudar a los clientes que hacen uso de ella a mantener políticas de sostenibilidad medioambiental.</p>

                    <p>La razón es simple: al utilizar los recursos de manera más eficiente, el gasto de energía en el que se incurre es también menor que el que harían las infraestrucuras de TI de los clientes si estuvieran implantadas de manera individual.</p>

                    <p>¿Necesitas más razones para volar en la nube?</p>
        
                </div>
        
            </div>
        </section>
        
        
      </div>
    );
  }

}
