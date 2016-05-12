
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
      backgroundImage: 'url(https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-seo.jpg)',
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
                    <CardTitle title="Posicionamiento" titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />
                    <CardText style={styles.text}>
                    <ul>
                     <li>El SEO te permite llegar a las primeras posiciones de los buscadores de acuerdo a las palabras clave que concuerden con el contenido de tus servicios en tu sitio web.</li>
        
                     <li>Aparecer en los primeros resultados de búsqueda es crucial para conseguir nuevos clientes potenciales y que todos puedan conocer los servicios que ofreces.</li>
        
                     <li>Analizamos el estado actual de tu sitio y detectamos las mejores oportunidades de mejora, te ofrecemos un diagnóstico y la ejecución de las soluciones a mediano y largo plazo.</li>
                    </ul>
                    </CardText>
                  </Card>
            </div>
        </section>
      </div>
    );
  }

}
