import React, { Component } from 'react';
import jsonp from 'jsonp';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import Layout from '../../components/Layout';

import { Container, Grid } from '../../styles/StyledComponents';

const Item = styled.div`
  img{
    width:100%;
  }
`;

const Project = (props) => {
  const { project } = props;
  return (
    <Item>
      <Link key={project.id} to={`/work/${project.id}/`}>
        <img src={project.covers[404]} alt="project cover" />
        <p>{project.name}</p>
      </Link>
      <ul style={{ fontSize: '1.6rem', display: 'flex' }}>
        {project.fields.map(field => (
          <li key={field}>{field}</li>
        ))}
      </ul>
    </Item>
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
        <Container>
          <h1>
            Work
          </h1>
          <Grid col="3" colGap="1.5" rowGap="1.5">
            {projects.map(project => (
              <Project key={project.id} project={project} />
            ))}
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default WorkIndexPage;
