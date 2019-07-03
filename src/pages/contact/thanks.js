import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../../components/Layout';

class Thanks extends Component {
  render() {
    return (
      <Layout>
        <section className="container text-center">
          <h1>Thank you!</h1>
          <p><FormattedMessage id="contact.thanks" /></p>
        </section>
      </Layout>
    );
  }
}

export default injectIntl(Thanks);
