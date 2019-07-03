import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';

export const AboutPageTemplate = () => (
  <section className="container">
    <h1>About Me</h1>
    <p><FormattedMessage id="about_me.description" /></p>
    <p><FormattedMessage id="about_me.current" /></p>
  </section>
);

const AboutPage = () => (
  <Layout>
    <AboutPageTemplate />
  </Layout>
);

export default injectIntl(AboutPage);
