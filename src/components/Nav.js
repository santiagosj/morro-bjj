import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './Nav.css'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname })

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
       activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
    { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>

        <div className="Nav--Container container">

             <Link to="/" onClick={this.handleLinkClick}>
                 <div style={{ width: `40px`, margin:`0 20px`}}>
                    <Logo />
                 </div>
             </Link>

          <div className="Nav--Links">
          <NavLink to="/" >Home</NavLink>
          
            <div className={`Nav--Group ${this.state.activeSubNav === 'about' ? 'active' : '' }`} > 

                 <span className={`NavLink Nav--GroupParent ${
                   this.props.location.pathname.includes('about') ||
                   this.props.location.pathname.includes('team')  ||
                   this.props.location.pathname.includes('news') 
                   ? 'active'
                    : ''
                 }`} 
                       onClick={() => this.toggleSubNav('about')}
                 >
                     Nosotros
                 </span>
                 <div className="Nav--GroupLinks">
                    {subNav.map( (link, index)=> (
                        <NavLink 
                        to={link.link} 
                        key={'posts-subnav-link-' + index}
                        className="Nav--GroupLink">{link.name}</NavLink>
                    ))}
                 </div>

            </div>
            <NavLink to="/contacto/" >Contacto</NavLink>
          </div>
          
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X /> : <Menu />}
          </button>

        </div>

      </nav>
    )
  }
}

export default ({ subNav }) => (
   <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
