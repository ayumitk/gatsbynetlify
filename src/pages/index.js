import React, { Component } from 'react';
import { injectIntl, FormattedMessage, Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { ArrowAltCircleRight } from 'styled-icons/fa-regular/ArrowAltCircleRight';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';
import WorkRoll from '../components/WorkRoll';
import SkillSet from '../components/SkillSet';

import { Container } from '../styles/StyledComponents';


const Hero = styled.div`
  background: ${props => props.theme.color.pink500};
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  h1{
    font-size: 5rem;
    span{
      font-weight: 400;
      font-size: 1.4rem;
      text-transform: uppercase;
      display: block;
      letter-spacing: 0.3rem;
    }
  }
`;

const AboutMe = styled.div`
  background: ${props => props.theme.color.blue700};
  color: #FFF;
  padding: 50px 0 150px 0;
  p{
    margin-bottom: 1.5rem;
  }
`;

const LinkButton = styled(Link)`
  background: ${props => props.theme.color.pink500};
  padding: 12px 24px;
  border-radius: 96px;
  display: inline-block;
  color: #FFF;
  text-decoration: none;
  &:hover{
    opacity: 0.9;
    text-decoration: none;
    color: #FFF;
  }
  svg{
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
    margin-left: 0.5rem;
  }
`;

class IndexPage extends Component {
  render() {
    return (
      <Layout>

        <Hero>
          <div style={{ textAlign: 'center' }}>
            <h1>
              Hi, I&apos;m Ayumi
              <br />
              <span>UI/UX Designer & Developer</span>
            </h1>
          </div>
        </Hero>

        <AboutMe>
          <Container>
            <h2 style={{ marginBottom: '1.5rem' }}>About Me</h2>
            <p><FormattedMessage id="about_me.description" /></p>
            <p><FormattedMessage id="about_me.current" /></p>
          </Container>
        </AboutMe>

        <SkillSet />
        <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
          <LinkButton to="/about/">
            <FormattedMessage id="read_more" />
            <ArrowAltCircleRight />
          </LinkButton>
        </div>

        <Container>
          <h2 style={{ marginBottom: '1.5rem' }}>Tips</h2>
          <BlogRoll />
          <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
            <LinkButton to="/blog/">
              <FormattedMessage id="read_more" />
              <ArrowAltCircleRight />
            </LinkButton>
          </div>
        </Container>

        <Container>
          <h2 style={{ marginBottom: '1.5rem' }}>Work</h2>
          <WorkRoll />
          <div style={{ textAlign: 'center' }}>
            <LinkButton to="/work/">
              <FormattedMessage id="read_more" />
              <ArrowAltCircleRight />
            </LinkButton>
          </div>
        </Container>

      </Layout>
    );
  }
}

export default injectIntl(IndexPage);
