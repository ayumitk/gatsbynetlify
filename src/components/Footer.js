import React from 'react';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import {
  FaTwitter, FaGithub, FaDribbble, FaBehance, FaLinkedinIn,
} from 'react-icons/fa';

import { Container } from '../styles/StyledComponents';

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

const StyledFooter = styled.footer`
  background: ${props => props.theme.color.blue800};
  color: ${props => props.theme.color.white};
  padding: 3rem 0;
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.color.white};
  display: inline-block;
  margin: 0.75rem;
  &:hover{
    color: #FFF;
  }
`;

const SocialNav = styled.a`
  background: ${props => props.theme.color.white};
  color: ${props => props.theme.color.blue800};
  border-radius: 100%;
  display: inline-block;
  line-height: 0;
  padding: 1rem;
  margin: 0.5rem;
  &:hover{
    background: #FFF;
    color: ${props => props.theme.color.blue800};
  }
`;

// Copyright Year
const currentDate = new Date();
const copyrightYear = currentDate.getFullYear();

const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Container style={{ textAlign: 'center' }}>

          <nav>
            <FooterLink to="/">
              Home
            </FooterLink>
            <FooterLink to="/about/">
              About
            </FooterLink>
            <FooterLink to="/blog/">
              Blog
            </FooterLink>
            <FooterLink to="/work/">
              Work
            </FooterLink>
            <FooterLink to="/contact/">
              Contact
            </FooterLink>
          </nav>

          <nav style={{ margin: '2rem 0' }}>
            {socialAccount.map(item => (
              <SocialNav title={item.name} className="social-link" href={item.url} target="_blank" key={item.name}>
                {item.icon}
              </SocialNav>
            ))}
          </nav>

          <p style={{ fontSize: '1.4rem' }}>
            {`© ${copyrightYear} Ayumi.tk`}
          </p>

        </Container>
      </StyledFooter>
    );
  }
};

export default Footer;
