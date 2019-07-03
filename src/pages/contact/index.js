import React, { Component } from 'react';
import { injectIntl, FormattedMessage, navigate } from 'gatsby-plugin-intl';
import Layout from '../../components/Layout';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
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
        <section className="container">
          <h1>Contact</h1>
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="name">
                <FormattedMessage id="contact.name" />
              </label>
              <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.handleChange}
                id="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FormattedMessage id="contact.email" />
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={this.handleChange}
                id="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <FormattedMessage id="contact.message" />
              </label>
              <textarea
                className="form-control"
                name="message"
                onChange={this.handleChange}
                id="message"
                required
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                <FormattedMessage id="contact.send" />
              </button>
            </div>

          </form>
        </section>
      </Layout>
    );
  }
}

export default injectIntl(Index);
