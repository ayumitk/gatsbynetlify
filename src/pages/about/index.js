import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../../components/Layout';
import SkillSet from '../../components/SkillSet';

import { Container } from '../../styles/StyledComponents';

const Experience = [
  {
    term: 'Aug 2017 - present',
    company: 'PetRibbon Inc.',
    jobTitle: 'Lead Creative Director',
    description: 'Leading all brand creative and direction for PetRibbon.<br>Designed and launched a pet funeral search and discovery service website for pet-lovers.<br>My responsibilities included heuristic analysis, wireframes, sitemaps, user flows, concept sketches and visual design.<br>Working closely with developer teams and QA to ensure successful implementation of all designs.',
  },
  {
    term: 'Aug 2015 - present',
    company: 'Freelancer',
    jobTitle: 'UI/UX Designer, Front-end Developer',
    description: 'I collaborated with developer teams and managed with a wide variety of projects involving branding, illustrations, UI design and front-end development.',
  },
  {
    term: 'Apr 2011 - Apr 2014',
    company: 'Anysense Inc.',
    field: 'Startup Company',
    jobTitle: 'Art Director, Design Department Manager',
    description: 'Conceptualized and designed websites and mobile apps to create wireframes, user flows and pixel perfect UI from start to finish to be interactive and user-friendly. Communicated with clients to form a strong understanding of their mission and to provide support and maintenance of ongoing projects.',
  },
  {
    term: 'Apr 2006 – Mar 2011',
    company: 'Japanizm Inc.',
    field: 'Digital Marketing Agency',
    jobTitle: 'Lead Web Designer',
    description: 'Led a team of designers and created 50+ corporate websites, landing pages and online stores for clients in various industries.<br>Designed the official event\'s website and eCommerce mobile app for FUKUOKA LOVE& COLLECTION 2008 that is one of Asia\'s biggest fashion events.',
  },
  {
    term: 'Jan 2006 – Mar 2006',
    company: 'Slashworks Inc.',
    field: 'Design Studio',
    jobTitle: 'Junior Web Designer',
    description: 'Assist on wireframes, image processing, color correction, retouching, mockup creation and pre production work. Design and style responsive web page layouts using CSS and HTML for desktop and mobile devises.<br>Cross-browser compatibility testing.',
  },
];
class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <h1>About Me</h1>
          <p><FormattedMessage id="about_me.description" /></p>
          <p><FormattedMessage id="about_me.current" /></p>

          <h2>What I do</h2>
          <SkillSet />

          <h2>Experience</h2>
          {Experience.map(item => (
            <div key={item.company}>{item.company}</div>
          ))}

          <h2>Education</h2>
          <div>
            <h3>ITD CanadaMay</h3>
            <p>2014 - Jul 2015</p>
            <p>IT Graphics and Web Development</p>
          </div>

        </Container>
      </Layout>
    );
  }
}

export default injectIntl(AboutPage);
