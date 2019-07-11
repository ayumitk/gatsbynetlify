import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="row">
        {posts
          && posts.map(({ node: post }) => (
            <div className="col-sm-4 col-lg-3" key={post.id}>
              <article
                className={`card ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <div className="card-body">
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <Link to={post.fields.slug} className="thumbnail-image">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${
                              post.title
                            }`,
                          }}
                        />
                      </Link>
                    ) : null}
                    <p className="post-meta mb-1">
                      <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </p>
                    <p className="text-muted small mb-1">
                      {post.frontmatter.date}
                    </p>
                  </header>
                  <p>
                    {post.frontmatter.description}
                    <Link className="" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 510, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
