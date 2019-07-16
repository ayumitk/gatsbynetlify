import React, { Component } from 'react';
import jsonp from 'jsonp';
import { injectIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';


class WorkPageTemplate extends Component {
  state = {
    project: [],
  }

  componentDidMount() {
    const { projectID } = this.props;
    const apiKey = '5AGtA6uAQot7srZlfWYtj1kZUXSuHx0S';
    const behanceProjectAPI = `https://www.behance.net/v2/projects/${projectID}?api_key=${apiKey}`;

    // console.log(behanceProjectAPI);

    jsonp(behanceProjectAPI, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(data.project);
        this.setState({
          project: data.project,
        });
      }
    });
  }

  render() {
    const { project } = this.state;
    if (project.covers) {
      console.log(project.covers[404]);
    }
    if (project.fields) {
      return (
        <div className="container">
          <h1>{project.name}</h1>
          <ul>
            {project.fields.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <img src={project.covers[404]} alt="project" />
        </div>
      );
    }

    return (
      <div className="container">loading...</div>
    );
  }
}

const WorkPage = ({ pageContext }) => (
  <Layout>
    <WorkPageTemplate projectID={pageContext.project} />
  </Layout>
);

export default injectIntl(WorkPage);
