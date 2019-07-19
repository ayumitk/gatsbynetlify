import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../../components/Layout';

import { Container } from '../../styles/StyledComponents';

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <h1>About Me</h1>
          <p><FormattedMessage id="about_me.description" /></p>
          <p><FormattedMessage id="about_me.current" /></p>
        </Container>
      </Layout>
    );
  }
}

export default injectIntl(AboutPage);
