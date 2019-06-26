import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import "../styles/prism.scss";
import "../styles/blog.scss";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  date,
}) => {
  const PostContent = contentComponent || Content

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
                    <li className="tag-item" key={tag + `tag`}>
                      <Link className="tag-link" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="text-muted ml-auto">{date}</p>
            </div>
          </header>

          <PostContent content={content} />

          <footer>
            {tags && tags.length ? (
              <ul className="tag-list" style={{ marginTop: `4rem` }}>
                {tags.map(tag => (
                  <li className="tag-item" key={tag + `tag`}>
                    <Link className="tag-link" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </footer>

        </article>

      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  date: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
