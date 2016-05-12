
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
      backgroundImage: 'url(https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-mkt.jpg)',
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
                    <CardTitle title="Marketing" titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />
                    <CardText style={styles.text}>
                    <ul>
                     <li>Creamos tus campañas de publicidad en redes sociales, gestionamos de manera eficiente y profesional tu comunicación a través de estos medios, elaboramos las estrategias que fidelicen a tus actuales clientes y que alcancen al mayor número de potenciales clientes.</li>
        
                     <li>Administramos tus campañas profesionales de newsletters, medimos y segmentamos cada una de ellas para maximizar su desempeño. Contamos también con depuración de bases de datos, optimizaciones de diseño, experiencia de usuario y elaboración de informes personalizados.</li>
        
                     <li>Te ofrecemos publicidad online en los sitios web y buscadores de más alto tráfico. Permitiéndote segmentar a tu público objetivo fácilmente y escalar tus campañas de manera automática.</li>
        
                     <li>Analizamos a tu público objetivo, identificamos las palabras clave, configuramos las campañas para obtener la mejor relación costo – beneficio y realizamos la optimización y seguimiento con informes detallados.</li>
                    </ul>
                    </CardText>
                  </Card>
            </div>
        </section>
      </div>
    );
  }

}
