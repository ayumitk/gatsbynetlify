import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTableOfContents = styled.div`
  padding: 2rem;
  margin: 1.5rem 0 3rem 0;
  border: solid 1px ${props => props.theme.color.gray300};
  display: inline-block;
  font-size: 1.6rem;
  ul {
    list-style: none;
    margin: 0;
    li {
      margin: 0.5rem 0;
      > ul {
        padding-left: 1.5rem;
      }
    }
  }
  > ul {
    padding: 0;
  }
`;

class TableOfContents extends Component {
  render() {
    const { toc, slug } = this.props;

    const regexp = new RegExp(slug, 'g');
    const newToc = toc.replace(regexp, '');

    return (
      <StyledTableOfContents>
        <p>目次</p>
        <div dangerouslySetInnerHTML={{ __html: newToc }} />
      </StyledTableOfContents>
    );
  }
}

TableOfContents.propTypes = {
  toc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default TableOfContents;
