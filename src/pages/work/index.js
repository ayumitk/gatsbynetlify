import React, { Component } from 'react';
import jsonp from 'jsonp';
import Layout from '../../components/Layout';


class WorkIndexPage extends Component {
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
        // console.log(data.projects);
        this.setState({
          projects: data.projects,
        });
      }
    });
  }

  render() {
    const { projects } = this.state;
    return (
      <Layout>
        <div
          className="mb-4"
        >
          <h1
            className="container"
          >
            Work
          </h1>
        </div>
        <section className="container">
          {projects.map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
        </section>
      </Layout>
    );
  }
}

export default WorkIndexPage;
