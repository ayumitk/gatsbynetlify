import React, { Component } from 'react';
import jsonp from 'jsonp';
import { injectIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';

const Module = (props) => {
  const { module } = props;
  return (
    <div>
      {
        (() => {
          if (module.type === 'image') {
            return (
              <img src={module.sizes[1400]} alt="project module" />
            );
          }
          return (
            <p>{module.text_plain}</p>
          );
        })()
      }
    </div>
  );
};

class WorkPageTemplate extends Component {
  state = {
    project: [],
  }

  componentDidMount() {
    const { projectID } = this.props;
    const apiKey = process.env.GATSBY_BEHANCE_KEY;
    const behanceProjectAPI = `https://www.behance.net/v2/projects/${projectID}?api_key=${apiKey}`;

    // console.log(behanceProjectAPI);

    jsonp(behanceProjectAPI, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        // console.log(data.project);
        this.setState({
          project: data.project,
        });
      }
    });
  }

  render() {
    const { project } = this.state;

    if (project.fields) {
      return (
        <div className="container">
          <h1>{project.name}</h1>
          <ul>
            {project.fields.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {project.tools.map(tool => (
              <li key={tool.id}>{tool.title}</li>
            ))}
          </ul>
          {project.modules.map(module => (
            <Module key={module.id} module={module} />
          ))}
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
