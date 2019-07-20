import React, { Component } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { ArrowAltCircleRight } from 'styled-icons/fa-regular/ArrowAltCircleRight';
import styled from 'styled-components';

import DesignIcon from '../img/design.svg';
import DevIcon from '../img/dev.svg';

import { Grid, Container } from '../styles/StyledComponents';

const Skill = styled(Container)`
  padding: 50px 0;
  margin-top: -100px !important;
  border-radius: 10px;
  background: #FFF;
`;

class SkillSet extends Component {
  render() {
    return (
      <Skill>
        <Grid col="2">
          <div style={{ textAlign: 'center' }}>
            <DesignIcon style={{ width: '10rem', height: '10rem' }} />
            <h2><FormattedMessage id="skill.design.title" /></h2>
            <p><FormattedMessage id="skill.design.description" /></p>
            <h3><FormattedMessage id="skill.design.what-i-do.title" /></h3>
            <p><FormattedMessage id="skill.design.what-i-do.list" /></p>
            <h3><FormattedMessage id="skill.design.tools.title" /></h3>
            <p><FormattedMessage id="skill.design.tools.list" /></p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <DevIcon style={{ width: '10rem', height: '10rem' }} />
            <h2><FormattedMessage id="skill.dev.title" /></h2>
            <p><FormattedMessage id="skill.dev.description" /></p>
            <h3><FormattedMessage id="skill.dev.languages.title" /></h3>
            <p><FormattedMessage id="skill.dev.languages.list" /></p>
            <h3><FormattedMessage id="skill.dev.tools.title" /></h3>
            <p><FormattedMessage id="skill.dev.tools.list" /></p>
          </div>
        </Grid>
      </Skill>
    );
  }
}

export default SkillSet;
