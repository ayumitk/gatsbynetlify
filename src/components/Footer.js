import React, { Component } from 'react';
import { Link } from 'gatsby';

import {
  IconTwitter, IconGithub, IconDribbble, IconBehance, IconLinkedin,
} from './Icon';

// Copyright Year
const currentDate = new Date();
const copyrightYear = currentDate.getFullYear();

const socialAccount = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/ayumitk__',
    icon: <IconTwitter />,
  },
  {
    name: 'Github',
    url: 'https://github.com/ayumitk',
    icon: <IconGithub />,
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/ayumitk',
    icon: <IconDribbble />,
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/ayumitk',
    icon: <IconBehance />,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/ayumi-takahashi-951831a9',
    icon: <IconLinkedin />,
  },
];

class Footer extends Component {
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
            {socialAccount.map(item => (
              <Link title={item.name} className="social-link" href={item.url} target="_blank">
                {item.icon}
              </Link>
            ))}
          </div>

          <p className="copyright small text-muted text-center">
            {`© ${copyrightYear} Ayumi Takahashi`}
          </p>

        </div>
      </footer>
    );
  }
}

export default Footer;
