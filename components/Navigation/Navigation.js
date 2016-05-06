import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButton from 'material-ui/lib/flat-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import IconButton from 'material-ui/lib/icon-button';
import Link from '../Link';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ActionHome from 'material-ui/lib/svg-icons/action/home';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ActionBookmark from 'material-ui/lib/svg-icons/action/bookmark';
import FileCloudDone from 'material-ui/lib/svg-icons/file/cloud-done';
import ContentSend from 'material-ui/lib/svg-icons/content/send';

injectTapEventPlugin();

const barButtonStyle = {
  marginRight: 2+'rem',
};

const appBarStyle = {
  backgroundColor: '#08a6d6',
};

const buttonLabel = {
  color: '#fff',
};

const iconStyle = {
  color: '#38393C',
  fontSize: 50+'px',
};

const rootStyle = {
  height: 70+'px',
  width: 70+'px',
  padding: 2+'px',
};

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="app-bar">
        <AppBar
            title=" "
            onLeftIconButtonTouchTap={this.handleToggle}
            iconStyleRight={barButtonStyle}
            style={appBarStyle}
        
            iconElementRight={<div><FlatButton 
            label="Servicios"
            linkButton={true}
            primary={true}
            href="/servicios"
            labelStyle={buttonLabel}
            onClick={Link.handleClick}/>
          <FlatButton 
            label="Nosotros"
            linkButton={true}
            primary={true}
            href="/nosotros"
            labelStyle={buttonLabel}
            onClick={Link.handleClick}/></div>}
          >
          
          </AppBar>
        <LeftNav
          docked={false}
          width={250}
        swipeAreaWidth={60}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
            <Card>
                <CardMedia
                  overlay={<CardTitle title="Cloud & Kloud" />}
                >
                  <img src="https://storage.googleapis.com/cykloud.appspot.com/static/img/tech/getInTouch-480.jpg" />
                </CardMedia>
              </Card>
            <List>
              <ListItem primaryText="Home" leftIcon={<ActionHome />} onTouchTap={this.handleClose} linkButton={true}
                href="/" 
                onClick={Link.handleClick} />
              <ListItem primaryText="Servicios" leftIcon={<FileCloudDone />} onTouchTap={this.handleClose}
              linkButton={true}
                href="/servicios" 
                onClick={Link.handleClick}/>
              <ListItem primaryText="Nosotros" leftIcon={<ActionInfo />} onTouchTap={this.handleClose}
              linkButton={true}
                href="/nosotros" 
                onClick={Link.handleClick}/>
              <ListItem primaryText="Blog" leftIcon={<ActionBookmark />} onTouchTap={this.handleClose}
              linkButton={true}
                href="/blog" 
                onClick={Link.handleClick}/>
              <ListItem primaryText="Contáctanos" leftIcon={<ContentSend />} onTouchTap={this.handleClose}
              linkButton={true}
                href="/contacto" 
                onClick={Link.handleClick}/>
            </List>
              
              <div className="col-1 menu-social">
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
              
        </LeftNav>
      </div>
    );
  }
}
