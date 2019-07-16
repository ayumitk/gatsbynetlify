import React, { Component } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';


class WorkPageTemplate extends Component {
  state = {
    projects: [],
  }

  componentDidMount() {
    const apiKey = '5AGtA6uAQot7srZlfWYtj1kZUXSuHx0S';
    const userID = 'ayumitk';
    const behanceUserAPI = `https://www.behance.net/v2/users/${userID}/projects?api_key=${apiKey}`;

    console.log(behanceUserAPI);

    jsonp(behanceUserAPI, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(data.projects);
        this.setState({
          projects: data.projects,
        });
      }
    });
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="container">
        <h2>Work</h2>
        <p>Under Construction</p>
        {projects.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
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
