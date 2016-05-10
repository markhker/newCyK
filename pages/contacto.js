
import React, { Component } from 'react';
import './scss/contact.scss';
import Paper from 'material-ui/lib/paper';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Link from '../components/Link';

import MyRawTheme from '../components/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const style = {
  fontSize: 25+'px',
  fontWeight: 200,
  color: '#08a6d6',
};

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class extends Component {

  render() {
    return (
      <div>
        <header className="contact-header">
            <div className="main-logo">
            <a href="/"><img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/logo.png" alt="Logo C&K" /></a>
            </div>
            <h1>Contáctanos</h1>
        </header>
        
        <section className="col-1 contact-section-1">
            <div className="col-1 col-s-20-24 col-m-22-24 col-l-20-24">
                <h1 className="col-20-24">¿Quieres que tu compañía evolucione? Sólo te tomará una llamada.</h1>
                    
                <a href="https://goo.gl/maps/oBY33tLY24t" className="col-20-24 col-m-10-24 col-l-7-24 paper" target="_blank">
                <Paper className="col-1 paper" zDepth={1}>
                    <CardTitle title="México, Ciudad de México" titleStyle={style} />
                </Paper>
                </a> 
        
                <a href="tel:+525536717281" className="col-20-24 col-m-10-24 col-l-7-24 paper">
                <Paper className="col-1 paper" zDepth={1}>
                    <CardTitle title="+52 1 55 3671 7281" titleStyle={style} />
                </Paper>
                </a>
        
                <a href="mailto:info@cyk.mx?subject=Me gustaría saber más acerca de ..." className="col-20-24 col-m-10-24 col-l-7-24 paper" target="_blank">
                <Paper className="col-1 paper" zDepth={1}>
                    <CardTitle title="info@cyk.mx" titleStyle={style} />
                </Paper>
                </a>
            </div>
        </section>
        
      </div>
    );
  }

}
