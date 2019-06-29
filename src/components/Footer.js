import React from 'react';
import { Link } from 'gatsby';

import twitter from '../img/twitter.svg';
import github from '../img/github.svg';
import dribbble from '../img/dribbble.svg';
import behance from '../img/behance.svg';
import linkedin from '../img/linkedin.svg';

const currentDate = new Date();
const copyrightYear = currentDate.getFullYear();

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <section>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                        Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                        About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                        Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                        Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                        Contact
                </Link>
              </li>
            </ul>
          </section>


          <div className="social-nav mb-3">
            <a title="twitter" className="social-link" href="https://twitter.com">
              <img
                src={twitter}
                alt="Twitter"
              />
            </a>
            <a title="github" className="social-link" href="https://github.com">
              <img
                className="fas fa-lg"
                src={github}
                alt="Github"
              />
            </a>
            <a title="dribbble" className="social-link" href="https://dribbble.com">
              <img
                src={dribbble}
                alt="Dribbble"
              />
            </a>
            <a title="behance" className="social-link" href="https://behance.com">
              <img
                src={behance}
                alt="Behance"
              />
            </a>
            <a title="linkedin" className="social-link" href="https://linkedin.com">
              <img
                src={linkedin}
                alt="Linkedin"
              />
            </a>
          </div>

          <p className="copyright small text-muted text-center">
            {`© ${copyrightYear} Ayumi Takahashi`}
          </p>

        </div>
      </footer>
    );
  }
};

export default Footer;
