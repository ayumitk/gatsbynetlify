import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="mb-4"
        >
          <h1
            className="container"
          >
            Latest Stories
          </h1>
        </div>
        <section className="container">
          <BlogRoll />
        </section>
      </Layout>
    );
  }
}
