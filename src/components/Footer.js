import React from 'react';
import { Link } from 'gatsby';

import {
  FaTwitter, FaGithub, FaDribbble, FaBehance, FaLinkedinIn,
} from 'react-icons/fa';

const socialAccount = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/ayumitk__',
    icon: <FaTwitter />,
  },
  {
    name: 'Github',
    url: 'https://github.com/ayumitk',
    icon: <FaGithub />,
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/ayumitk',
    icon: <FaDribbble />,
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/ayumitk',
    icon: <FaBehance />,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/ayumi-takahashi-951831a9',
    icon: <FaLinkedinIn />,
  },
];

// Copyright Year
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
                <Link className="nav-link" to="/">
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
              <a title={item.name} className="social-link" href={item.url} target="_blank" key={item.name}>
                {item.icon}
              </a>
            ))}
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
