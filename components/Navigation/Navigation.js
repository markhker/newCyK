import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButton from 'material-ui/lib/flat-button';
import Link from '../Link';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar
            title=" "
            onLeftIconButtonTouchTap={this.handleToggle}
          >
          <FlatButton 
            label="Servicios"
            linkButton={true}
            primary={true}
            href="/servicios/" 
            onClick={Link.handleClick}/>
          <FlatButton 
            label="Nosotros"
            linkButton={true}
            primary={true}
            href="/nosotros/" 
            onClick={Link.handleClick}/>
          </AppBar>
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}