import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import Link from '../Link';

const iconStyle = {
  color: '#08a6d6',
  fontSize: 4.5+'rem',
};

const rootStyle = {
  height: 6+'rem',
  width: 6+'rem',
  padding: .2+'rem',
};

export default class Footer extends React.Component {

  render() {
    return (
      <footer className="col-1 main-footer">
        <div className="col-16-24 col-s-12-24 col-m-9-24 col-l-5-24 footer-logo">
            <img className="res-img" src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/logot.png" alt="C&K Logotype" />
        </div>
        
        <div className="col-10-24 col-m-8-24 col-l-5-24 footer-social">
            <IconButton
              iconClassName="social-face-2" tooltip="cloudandkloud"
              tooltipPosition="top-center"
              iconStyle={iconStyle}
              style={rootStyle}
              touch={true}
              linkButton={true}
              href="https://www.facebook.com/cloudandkloud"
            />
            <IconButton
              iconClassName="social-twitter" tooltip="@cyk_mx"
              tooltipPosition="top-center"
              iconStyle={iconStyle}
              style={rootStyle}
              touch={true}
              linkButton={true}
              href="https://twitter.com/cyk_mx"
            />
            <IconButton
              iconClassName="social-linkedin" tooltip="cloud-and-kloud"
              tooltipPosition="top-center"
              iconStyle={iconStyle}
              style={rootStyle}
              touch={true}
              linkButton={true}
              href="https://www.linkedin.com/company/cloud-and-kloud"
            />
        </div>
        
        <p>© 2015–2016  Cloud & Kloud</p>
      </footer>
    );
  }
}