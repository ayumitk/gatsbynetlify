import React from 'react';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import { Twitter } from 'styled-icons/fa-brands/Twitter';
import { Github } from 'styled-icons/fa-brands/Github';
import { Dribbble } from 'styled-icons/fa-brands/Dribbble';
import { Behance } from 'styled-icons/fa-brands/Behance';
import { LinkedinIn } from 'styled-icons/fa-brands/LinkedinIn';

import { Container } from '../styles/StyledComponents';

const socialAccount = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/ayumitk__',
    icon: <Twitter />,
  },
  {
    name: 'Github',
    url: 'https://github.com/ayumitk',
    icon: <Github />,
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/ayumitk',
    icon: <Dribbble />,
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/ayumitk',
    icon: <Behance />,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/ayumi-takahashi-951831a9',
    icon: <LinkedinIn />,
  },
];

const StyledFooter = styled.footer`
  background: ${props => props.theme.color.blue800};
  color: ${props => props.theme.color.gray400};
  padding: 3rem 0;
  margin-top: 10rem;
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.color.gray400};
  display: inline-block;
  margin: 0.75rem;
  &:hover{
    color: #FFF;
  }
`;

const SocialNav = styled.a`
  background: ${props => props.theme.color.gray400};
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
  svg{
    width:1.8rem;
    height:1.8rem;
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
              <SocialNav title={item.name} href={item.url} target="_blank" key={item.name}>
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
