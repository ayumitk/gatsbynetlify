import React, { Component } from 'react';
import { injectIntl, FormattedMessage, Link } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';

import DesignIcon from '../img/design.inline.svg';
import DevIcon from '../img/dev.inline.svg';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <section className="main-visual d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h2>Hi, I&apos;m Ayumi</h2>
            <p>UI/UX Designer & Developer</p>
          </div>
        </section>

        <section className="about-me">
          <div className="container">
            <h3>About Me</h3>
            <p><FormattedMessage id="about_me.description" /></p>
            <p><FormattedMessage id="about_me.current" /></p>
          </div>
        </section>

        <section className="skills text-center">
          <div className="container">
            <div className="card">
              <div className="row">
                <div className="col-12 col-md-6 border-right p-5">
                  <div className="skill-icon"><DesignIcon /></div>
                  <h2>UI/UX Design</h2>
                  <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                  <h3>Things I enjoy designing:</h3>
                  <p>UX, UI, Web, Mobile, Apps, Branding, Logos</p>
                  <h3>Design Tools:</h3>
                  <p>Sketch, Photoshop, Illustrator, Adobe DX, Pen &amp; Paper, Invision, Zeplin</p>
                </div>
                <div className="col-12 col-md-6 p-5">
                  <div className="skill-icon"><DevIcon /></div>
                  <h2>Front-end Dev</h2>
                  <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                  <h3>Languages I speak:</h3>
                  <p>HTML, CSS/Sass, JavaScript</p>
                  <h3>Dev Tools:</h3>
                  <p>VS Code, Bootstrap, React, Gulp, Webpack, npm, Git, Wordpress, Gatsby</p>
                </div>
              </div>
            </div>
          </div>
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

      </Layout>
    );
  }
}

export default injectIntl(IndexPage);
