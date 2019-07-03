import React from 'react';
import PropTypes from 'prop-types';
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

WorkPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default injectIntl(WorkPage);
