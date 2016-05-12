
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
      backgroundImage: 'url(https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/service-crm.jpg)',
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
                    <CardTitle title="Clientes" titleStyle={styles.cardTitle} subtitleStyle={styles.cardSubtitle} />
                    <CardText style={styles.text}>
                    <ul>
                     <li>ealiza ventas de manera más inteligente y más rápida con las soluciones de CRM más avanzadas de la industria. Crea un seguimiento de la información y las interacciones de tus clientes en un solo lugar. No importa si es un representante de ventas en campo o interno, o si prefieres trabajar a través de tu correo electrónico; puedes hacer más tareas, desde cualquier lugar. También puedes automatizar procesos comerciales complejos para aumentar aún más la productividad.</li>
        
                     <li>Al tener toda tu información en un solo lugar, es más sencillo establecer prioridades y tomar decisiones rápidas basadas en la información más actualizada; todo desde cualquiera de tus dispositivos: laptop, smartphone, tablet...</li>
        
                     <li>Prepara a tus clientes potenciales hasta que estén listos para las ventas y guíalos hacia los representantes indicados en el momento indicado, Convierte cada cliente potencial en un cliente potencial de calidad.</li>
                    </ul>
                    </CardText>
                  </Card>
            </div>
        </section>
      </div>
    );
  }

}
