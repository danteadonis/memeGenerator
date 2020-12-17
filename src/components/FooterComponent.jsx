import React, { Component } from 'react';
import '../styles/Footer.css';

class FooterComponent extends Component {
  state = { 
    footerLinks: {
      git: 'https://github.com/danteadonis?tab=repositories',
      twi: 'https://twitter.com/danteadonis_',
      web: 'https://danteadonis.herokuapp.com/'
    }
   }
  render() { 
    return ( 
      <footer className="footer bg-danger text-light text-center">
        <ul className="d-flex justify-content-center pt-3">
          <li className="mx-2">
            <a href={ this.state.footerLinks.git }>
              <i className="faIcons fab fa-github-alt"></i>
            </a>
          </li>
          <li className="mx-2">
            <a href={ this.state.footerLinks.twi }>
              <i className="faIcons fab fa-twitter"></i>
            </a>
          </li>
          <li className="mx-2">
            <a href={ this.state.footerLinks.web }>
              <i className="faIcons fas fa-globe"></i>
            </a>
          </li>
        </ul>
        {/* <p>&copy; DanteAdonis, 2020.</p> */}
      </footer>
     );
  }
}
 
export default FooterComponent;
