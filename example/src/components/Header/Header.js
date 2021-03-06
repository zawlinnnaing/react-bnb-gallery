import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Container from '../Container';
import GitHubButton from '../GitHubButton';

import sections from '../../pages';

import { ReactComponent as Logo } from './logo.svg';

class Header extends Component {
  renderMenu() {
    const items = sections.map(section => {
      if (!section.disabled) {
        return (
          <li key={section.id}>
            <Link to={section.id}>
              {section.title}
            </Link>
          </li>
        );
      } else {
        return null;
      }
    });

    return (
      <ul className="nav">
        {items}
      </ul>
    );
  }

  render() {
    return (
      <header className="header">
        <Container className="header__container">
          <div className="header__content">
            <div className="header__brand">
              <Logo />
            </div>
            <nav className="navigation">
              {this.renderMenu()}
            </nav>
            <div className="right">
              <GitHubButton
                user="peterpalau"
                repo="react-bnb-gallery"
              />
            </div>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
