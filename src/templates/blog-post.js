import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { DiscussionEmbed, CommentCount } from 'disqus-react';
import { Link } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import TableOfContents from '../components/TableOfContents';

import '../styles/prism.scss';
import '../styles/blog.scss';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  date,
  toc,
  featuredimage,
  slug,
}) => {
  const PostContent = contentComponent || Content;

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  };

  return (
    <section className="blog-post">
      {helmet || ''}
      <div className="container">

        <article>

          <header>
            <h1 className="title">
              {title}
            </h1>
            <p className="text-muted">{description}</p>
            <div className="d-sm-flex flex-wrap">
              {tags && tags.length ? (
                <ul className="tag-list">
                  {tags.map(tag => (
                    <li className="tag-item" key={`${tag}tag`}>
                      <Link className="tag-link" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="text-muted ml-auto">
                <span className="mr-3">{date}</span>
                <Link to={`${slug}#disqus_thread`}>
                  <CommentCount {...disqusConfig} />
                </Link>
              </div>
            </div>
          </header>

          <PreviewCompatibleImage
            imageInfo={{
              image: featuredimage,
              alt: `featured image for post ${title}`,
            }}
          />

          <TableOfContents
            toc={toc}
            slug={slug}
          />

          <PostContent content={content} />

          <footer>
            {tags && tags.length ? (
              <ul className="tag-list" style={{ marginTop: '4rem' }}>
                {tags.map(tag => (
                  <li className="tag-item" key={`${tag}tag`}>
                    <Link className="tag-link" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </footer>

          <DiscussionEmbed {...disqusConfig} />

        </article>

      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  slug: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  toc: PropTypes.string.isRequired,
  featuredimage: PropTypes.object.isRequired,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={(
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        )}
        slug={post.fields.slug}
        toc={post.tableOfContents}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2040, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
