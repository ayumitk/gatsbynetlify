import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableOfContents extends Component {
  render() {
    const { toc } = this.props;
    return (
      <div className="table-of-contents">
        <p>目次</p>
        <div
          className="table-of-contents__inner"
          dangerouslySetInnerHTML={{ __html: toc }}
        />
      </div>
    );
  }
}

TableOfContents.propTypes = {
  toc: PropTypes.string.isRequired,
};

export default TableOfContents;
