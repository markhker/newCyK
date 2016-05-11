
import React, { Component } from 'react';
import '../scss/post.scss';
import Link from '../../components/Link';

import MyRawTheme from '../../components/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const styles = {
  mainImage: {
      backgroundImage: 'url(https://storage.googleapis.com/cykloud.appspot.com/static/blog/img/2015-11-10-la-seguridad-en-la-nube-un-reto-para-los-proveedores.jpg)',
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
                        <span>‘La seguridad en la nube; un reto para los proveedores’</span>
                    </h1>

                    <aside className="col-1"> 10.11.15 </aside>

                    <p className="col-18-24 col-m-16-24 col-l-12-24 lead"> 
                        ‘La mayoría de las empresas que conocen el término nube suelen tener dudas con respecto a la seguridad de sus datos, algo que con el paso del tiempo va a ser cosa del pasado.’
                    </p>
                </div>
        
                <div className="col-20-24 col-m-18-24 col-l-15-24 title-content">
        
                    <p>El principal obstáculo para que una compañía pueda ser más innovadora y competitiva es la incertidumbre que tienen con respecto a como manejan sus datos los proveedores de nube, ésto ya no es un miedo del cuál preocuparse.</p>

                    <p>Mediante normativas y certificaciones establecidas en cada país y generalizando que, para cada uno de los proveedores de la nube, necesitan tener estas certificaciones para poder dar los servicios en la nube sin que el usuario se vea afectado por un posible mal uso de su información.</p>

                    <p>Los proveedores de la nube, tales como Google, Amazon, Microsoft, Azure, Dropbox, entre otros, cuentan con certificaciones tales como: ISO 27001, CSA STAR (Security, Trust &amp; Assurance Registry), LOPD (Ley Orgánica de Protección de Datos), LFPDPPP (Ley Federal de Protección de Datos Personales en Posesión de Particulares), por mencionar algunos, los cuáles obligan a los proveedores a usar sólo la información para lo que se les fué contratado: almacenar, respaldar y proteger los datos de los usuarios.</p>

                    <p>Ésto sólo es una parte de lo que los proveedores de servicios cloud ofrecen al cliente, mantener segura la información, tener copias de seguridad por cualquier fallo en uno de sus servidores y tener acceso a su información 24/7, siendo los profesionales en seguridad informática encargados de evitar ataques de intrusos a la información de los usuarios y su fuga.</p>

                    <p>Pero también hay otra forma de mantener segura la información mas delicada dentro de servidores virtuales.</p>

                    <h2>La encriptación</h2>

                    <p>Una manera sencilla y eficaz de ocultar la información es encriptando, ésto ayuda en caso de que si la información pasa a un tercero éste no pueda ver su contenido ni modificarlo haciendo imposible que el usuario se vea vulnerable ante cualquier circunstancia.</p>

                    <p>Es el caso de, por ejemplo, un software como Boxcryptor, que se puede instalar en un ordenador, Mac o dispositivo móvil, y ofrece un acceso similar al del acceso al espacio de almacenamiento en la nube. La idea principal es determinar si un directorio contiene archivos encriptados y aumentar los niveles de privacidad. De la misma manera que con Google Drive, Dropbox y otros servicios, tienes la posibilidad de compartir datos desde aquí, incluso archivos encriptados.</p>

                    <p>Además existen más servicios parecidos, como Viivo, Cloudfogger y Crypsync. El software “Hippo” está especializado en la encriptación de datos tanto en un ordenador como para las redes sociales. Este sistema aprovecha el uso normal del equipo con un software cliente que utiliza un servidor Cloud para la identificación. Con este software se pueden realizar distintas funciones. Se puede encriptar un archivo que acabas de recibir para luego guardarlo en el disco duro o directamente en el directorio con el que se hace la sincronización con Dropbox o el espacio de almacenamiento en la nube que utilices.</p>

                    <p>Una vez encriptado el archivo, se puede desencriptar sólo con el cliente Hippo. Sin embargo, para enviarlo a alguien que tiene instalado Hippo, es necesario desencriptarlo, si bien se estará enviado a través de un túnel seguro y encriptado, y el recipiente lo podrá encriptar con su propia clave. Las ventajas principales de Hippo son que es una clave de encriptación de 512 bits y no hace falta instalación. No obstante, puede haber sólo un cliente en una memoria USB. Es obvio que la práctica y conocimiento de la alta seguridad es cada vez más común.</p>

        
                </div>
        
            </div>
        </section>
        
        
      </div>
    );
  }

}
