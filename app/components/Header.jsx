
import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import MenuItem from 'material-ui/lib/menu/menu-item';
import LinkMenuItem from 'material-ui/lib/menu/link-menu-item';
import SubheaderMenuItem from 'material-ui/lib/menu/subheader-menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import FontIcon from 'material-ui/lib/font-icon';
import ShowCase from './ShowCase.jsx';
import { Link } from 'react-router';

class Header extends React.Component {
    constructor(){
        super();
        this._handleClick = this._handleClick.bind(this);
        this._menuClick = this._menuClick.bind(this);
    }
  

	render(){
        let _title = "Showcase";
		return (
            <div id="page_container">
            
			 <LeftNav 
                ref="leftNav" 
                docked={false} 
                header={<div className="menu_title">        <FontIcon className="fa fa-paint-brush" color="#00bcd4"/>Menu</div>}>
            <MenuItem className="menuItem" onTouchTap={this._menuClick} index={0}><Link to="/" className="menuLink">Showcase</Link></MenuItem>
            <MenuItem className="menuItem" onTouchTap={this._menuClick} index={1}><Link to="/about" className="menuLink">About</Link></MenuItem>
            <MenuItem className="menuItem" onTouchTap={this._menuClick} index={2}><Link to="/signin" className="menuLink">Signin</Link></MenuItem>
            <div className="menuSubheader"><SubheaderMenuItem
              index={3}
              text='Social' 
            /></div>
            <LinkMenuItem
              index={4}
              text='GitHub'
              payload="https://github.com/callemall/material-ui"
              target="_blank"
            className="menuLink"
            />
            <LinkMenuItem
              index={4}
              text='Twitter'
              payload="https://github.com/callemall/material-ui"
              target="_blank"
                className="menuLink"
            />
          
            </LeftNav>
				<AppBar
                  title={<Link to="/" className="header_title"><span className="main_title">{_title} <FontIcon className="fa fa-paint-brush"/></span></Link>}
                onLeftIconButtonTouchTap={this._handleClick}>
                <a className="social_links" target="_blank" href="https://github.com/callemall/material-ui">    <FontIcon
        className="fa fa-github"
        color="white"/></a>
            <a className="social_links" target="_blank" href="https://github.com/callemall/material-ui"><FontIcon
        className="fa fa-twitter"
        color="white"/></a>
            </AppBar>

            { this.props.children }
              </div>                     

		)
	}
    _handleClick(e) {
    e.preventDefault();
 
    this.refs.leftNav.toggle();
  }
    _menuClick(e) {

 console.log(this.refs.leftNav);
    this.refs.leftNav.close();
  }
}

export default Header;
