
import React, { Component } from 'react';
import './scss/service-single.scss';
import Link from '../components/Link';

import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
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
    
  mainImage: {
      backgroundImage: 'url(https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-web.jpg)',
  },
};

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class extends Component {

  render() {
    return (
      <div>
        <header className="service-header">
            <span className="img webfeedsFeaturedVisual" style={styles.mainImage} />
        </header>
        
        <section className="col-1 service-single">
            <div className="col-1 col-s-20-24 col-m-22-24 col-l-20-24">
        
                <Card className="col-22-24 paper">
                    <CardTitle title="Web" titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />
                    <CardText style={styles.text}>
                    <ul>
                     <li>Diseñamos tu sitio web a la medida, creamos interfaces de usuario con altos niveles de usabilidad que te permitirán brindar una mejor experiencia a tus usuarios. Tu sitio contará con un diseño responsivo que se adapta a todos los dispositivos móviles para brindar una mejor experiencia.</li>
        
                     <li>Desarrollamos la tecnología que te permitirá manejar grandes cantidades de usuarios accediendo al mismo tiempo a tu sitio, manteniéndolo siempre funcional y adaptándose al tráfico.</li>
        
                     <li>Creamos tus aplicaciones en la nube, que funcionan a través de internet, sin necesidad de distribuir e instalar software, independientes del sistema operativo del cliente.</li>
        
                     <li>Las actualizaciones son inmediatas, la disponibilidad es muy alta y te permiten colaborar en línea con todo tu equipo de trabajo.</li>
                    </ul>
                    </CardText>
                  </Card>
            </div>
        </section>
      </div>
    );
  }

}
