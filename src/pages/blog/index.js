import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

import { Container } from '../../styles/StyledComponents';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <h1>
            Latest Tips
          </h1>
          <BlogRoll />
        </Container>
      </Layout>
    );
  }
}
