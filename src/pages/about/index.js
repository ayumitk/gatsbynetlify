import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../../components/Layout';

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <section className="container">
          <h1>About Me</h1>
          <p><FormattedMessage id="about_me.description" /></p>
          <p><FormattedMessage id="about_me.current" /></p>
        </section>
      </Layout>
    );
  }
}

export default injectIntl(AboutPage);
