import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <div className="container text-center">
      <h1>404 Not Found</h1>
      <p><FormattedMessage id="not_found" /></p>
    </div>
  </Layout>
);

export default injectIntl(NotFoundPage);
