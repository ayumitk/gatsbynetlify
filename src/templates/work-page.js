import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';

export const WorkPageTemplate = () => (
  <div className="container">
    <div>
      <h2>Work</h2>
      <p>Under Construction</p>
    </div>
  </div>
);

const WorkPage = () => (
  <Layout>
    <WorkPageTemplate />
  </Layout>
);

export default injectIntl(WorkPage);
