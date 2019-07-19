import React, { Component } from 'react';
import { injectIntl, FormattedMessage, Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { ArrowAltCircleRight } from 'styled-icons/fa-regular/ArrowAltCircleRight';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';

import DesignIcon from '../img/design.svg';
import DevIcon from '../img/dev.svg';

import { Grid, Container } from '../styles/StyledComponents';


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

const Skill = styled(Container)`
  padding: 50px 0;
  margin-top: -100px !important;
  border-radius: 10px;
  background: #FFF;
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
            <h2>About Me</h2>
            <p><FormattedMessage id="about_me.description" /></p>
            <p><FormattedMessage id="about_me.current" /></p>
          </Container>
        </AboutMe>

        <Skill>
          <Grid col="2">
            <div style={{ textAlign: 'center' }}>
              <DesignIcon style={{ width: '10rem', height: '10rem' }} />
              <h2><FormattedMessage id="skill.design.title" /></h2>
              <p><FormattedMessage id="skill.design.description" /></p>
              <h3><FormattedMessage id="skill.design.what-i-do.title" /></h3>
              <p><FormattedMessage id="skill.design.what-i-do.list" /></p>
              <h3><FormattedMessage id="skill.design.tools.title" /></h3>
              <p><FormattedMessage id="skill.design.tools.list" /></p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <DevIcon style={{ width: '10rem', height: '10rem' }} />
              <h2><FormattedMessage id="skill.dev.title" /></h2>
              <p><FormattedMessage id="skill.dev.description" /></p>
              <h3><FormattedMessage id="skill.dev.languages.title" /></h3>
              <p><FormattedMessage id="skill.dev.languages.list" /></p>
              <h3><FormattedMessage id="skill.dev.tools.title" /></h3>
              <p><FormattedMessage id="skill.dev.tools.list" /></p>
            </div>
          </Grid>
          <div style={{ textAlign: 'center' }}>
            <LinkButton to="/about/">
              <FormattedMessage id="read_more" />
              <ArrowAltCircleRight />
            </LinkButton>
          </div>
        </Skill>

        <Container>
          <h2>Tips</h2>
          <BlogRoll />
          <div style={{ textAlign: 'center' }}>
            <LinkButton to="/blog/">
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
