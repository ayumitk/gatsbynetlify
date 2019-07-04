import React, { Component } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';

class WorkPageTemplate extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    const apiKey = '5AGtA6uAQot7srZlfWYtj1kZUXSuHx0S';
    const userID = 'ayumitk';
    const perPage = 6;
    // const behanceUserAPI = `https://www.behance.net/v2/users/${userID}/projects?callback=?&api_key=${apiKey}&per_page=${perPage}&callback=callbackUser`;
    const behanceUserAPI = `https://www.behance.net/v2/users/${userID}/projects?api_key=${apiKey}&per_page=${perPage}`;

    console.log(behanceUserAPI);

    fetch(behanceUserAPI)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items);
    return (
      <div className="container">
        <h2>Work</h2>
        <p>Under Construction</p>
      </div>
    );
  }
}

const WorkPage = () => (
  <Layout>
    <WorkPageTemplate />
  </Layout>
);

export default injectIntl(WorkPage);
