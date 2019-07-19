import React, { Component } from 'react';
import { injectIntl, FormattedMessage, navigate } from 'gatsby-plugin-intl';
import Layout from '../../components/Layout';

import { Container } from '../../styles/StyledComponents';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

class Index extends Component {
  state = {
    isValidated: false,
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  }

  render() {
    return (
      <Layout>
        <Container>
          <h1>Contact</h1>
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* eslint-disable-next-line */}
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label htmlFor="bot-field">
                Don’t fill this out:
                <input name="bot-field" id="bot-field" onChange={this.handleChange} />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="name">
                <FormattedMessage id="contact.name" />
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  id="name"
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FormattedMessage id="contact.email" />
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  id="email"
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <FormattedMessage id="contact.message" />
                <textarea
                  className="form-control"
                  name="message"
                  onChange={this.handleChange}
                  id="message"
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                <FormattedMessage id="contact.send" />
              </button>
            </div>

          </form>
        </Container>
      </Layout>
    );
  }
}

export default injectIntl(Index);
