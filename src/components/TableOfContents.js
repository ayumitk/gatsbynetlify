import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableOfContents extends Component {
  render() {
    const { toc, slug } = this.props;

    const regexp = new RegExp(slug, 'g');
    const newToc = toc.replace(regexp, '');

    return (
      <div className="table-of-contents">
        <p>目次</p>
        <div
          className="table-of-contents__inner"
          dangerouslySetInnerHTML={{ __html: newToc }}
        />
      </div>
    );
  }
}

TableOfContents.propTypes = {
  toc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default TableOfContents;
