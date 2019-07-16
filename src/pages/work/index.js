import React, { Component } from 'react';
import jsonp from 'jsonp';
import { Link } from 'gatsby-plugin-intl';
import Layout from '../../components/Layout';

const Project = (props) => {
  const { project } = props;
  return (
    <div>
      <Link key={project.id} to={`/work/${project.id}/`}>
        <img src={project.covers[404]} alt="project cover" />
        <p>{project.name}</p>
      </Link>
      <ul>
        {project.fields.map(field => (
          <li key={field}>{field}</li>
        ))}
      </ul>
    </div>
  );
};

class WorkIndexPage extends Component {
  state = {
    projects: [],
  }

  componentDidMount() {
    const apiKey = process.env.GATSBY_BEHANCE_KEY;
    const userID = process.env.GATSBY_BEHANCE_USER_ID;
    const behanceUserAPI = `https://www.behance.net/v2/users/${userID}/projects?api_key=${apiKey}`;

    // console.log(behanceUserAPI);

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
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </section>
      </Layout>
    );
  }
}

export default WorkIndexPage;
