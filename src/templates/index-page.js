import React from 'react';
import { injectIntl, FormattedMessage, Link } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = () => (
  <div>
    <section>
      <div className="container text-center">
        <h2>Hi, I&apos;m Ayumi</h2>
        <p>UI/UX Designer & Developer</p>
      </div>
    </section>

    <section className="container">
      <h3>About Me</h3>
      <p><FormattedMessage id="about_me.description" /></p>
      <p><FormattedMessage id="about_me.current" /></p>
    </section>

    <section className="container">
      <h3>
        Latest Tips
      </h3>
      <BlogRoll />
      <div className="text-center">
        <Link className="btn btn-primary" to="/blog">
          <FormattedMessage id="read_more" />
        </Link>
      </div>
    </section>

  </div>
);

const IndexPage = () => (
  <Layout>
    <IndexPageTemplate />
  </Layout>
);

export default injectIntl(IndexPage);
