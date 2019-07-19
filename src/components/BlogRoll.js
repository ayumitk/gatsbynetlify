import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import PreviewCompatibleImage from './PreviewCompatibleImage';


import { Grid } from '../styles/StyledComponents';

const Card = styled.article`
  box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
  background: #FFF;
`;

const CardBody = styled.div`
  padding: 1.5rem 1.5rem 3rem 1.5rem;
`;

const Text = styled.p`
  font-size: ${props => (props.small ? '1.4rem' : '')};
  color: ${props => (props.gray ? props.theme.color.gray : '')};
`;

const BlogTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  line-height: 1.25;
  font-weight: 600;
`;

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Grid col="4" colGap="1.5" rowGap="1.5">
        {posts
          && posts.map(({ node: post }) => (
            <Card key={post.id}>
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
              <CardBody>
                <Link to={post.fields.slug}>
                  <BlogTitle>{post.frontmatter.title}</BlogTitle>
                </Link>
                <Text small gray>
                  {post.frontmatter.date}
                </Text>
                <Text small>
                  {post.frontmatter.description}
                  <Link className="" to={post.fields.slug}>
                    <FormattedMessage id="keep_reading" />
                  </Link>
                </Text>
              </CardBody>
            </Card>
          ))}
      </Grid>
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
