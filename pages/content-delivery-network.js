
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
      backgroundImage: 'url(https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-cdn.jpg)',
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
                    <CardTitle title="Contenido" titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />
                    <CardText style={styles.text}>
                    <ul>
                     <li>Un CDN en la nube te permite distribuir todo el contenido de tu sitio web, que incluye todo el contenido estático, dinámico, interactivo, incluso de streaming. Las peticiones de usuario son redirigidas, de forma automática, a la ubicación más cercana, permitiendo que el contenido sea entregado con el máximo desempeño posible.</li>
        
                     <li>El costo flexible te permite pagar exactamente sólo por el contenido que se distribuya a través de este servicio.</li>
                    </ul>
                    </CardText>
                  </Card>
            </div>
        </section>
      </div>
    );
  }

}
