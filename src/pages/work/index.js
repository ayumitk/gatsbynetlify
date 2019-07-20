import React, { Component } from 'react';
import Layout from '../../components/Layout';
import WorkRoll from '../../components/WorkRoll';

import { Container } from '../../styles/StyledComponents';

class WorkIndexPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <h1>
            Work
          </h1>
          <WorkRoll />
        </Container>
      </Layout>
    );
  }
}

export default WorkIndexPage;
