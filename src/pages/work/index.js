import React, { Component } from 'react';
import jsonp from 'jsonp';
import { Link } from 'gatsby-plugin-intl';
import Layout from '../../components/Layout';

import { Container } from '../../styles/StyledComponents';

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
        <Container>
          <h1>
            Work
          </h1>
          {projects.map(item => (
            <Link key={item.id} to={`/work/${item.id}/`}>{item.name}</Link>
          ))}
        </Container>
      </Layout>
    );
  }
}

export default WorkIndexPage;
