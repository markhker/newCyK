import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Link from '../Link';

import MyRawTheme from '../theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const contactStyle = {
  fontSize: 1.5+'rem',
  padding: 2+'rem',
  height:100 +'%',
  lineHeight: 5+'rem',
};

const trainingColor = '#f44336';
const cfColor = '#8E44AD';

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class More extends React.Component {

  render() {
    return (
      <section className="col-1 col-m-12-24 more">
        <h2 className="col-20-24">Conoce que más tenemos para ti:</h2>
        
        <div className="col-1 more-buttons">
            <RaisedButton className="button" label="C&K Training" primary={true} labelStyle={contactStyle} backgroundColor={trainingColor} linkButton={true}
              href="https://tr.cyk.mx" />
        
            <RaisedButton className="button" label="CodeFly" primary={true} labelStyle={contactStyle} backgroundColor={cfColor} linkButton={true}
              href="https://codefly.cyk.mx" />
        </div>
      </section>
    );
  }
}