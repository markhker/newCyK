
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
      backgroundImage: 'url(https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-work.jpg)',
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
                    <CardTitle title="Productividad" titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />
                    <CardText style={styles.text}>
                    <ul>
                     <li>Con Google Apps for Work puedes obtener correo electrónico profesional y personalizado para tu empresa, calendarios compartidos, almacenamiento en línea, videoconferencias. Todo accesible desde cualquiera de tus dispositivos como tablet, laptop y smartphone.</li>
        
                     <li>Puedes preservar todos los datos de tu empresa seguros, centralizados y protegidos contra cualquier inconveniente, como la pérdida de hardware o los cambios de personal. Edita tus documentos en tiempo real con otros miembros de tu equipo, ya no es necesario enviar archivos finales adjuntos para que todo tu equipo esté en sincronía.</li>
                    </ul>
                    </CardText>
                  </Card>
            </div>
        </section>
      </div>
    );
  }

}
