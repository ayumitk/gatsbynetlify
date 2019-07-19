import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { DiscussionEmbed, CommentCount } from 'disqus-react';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import TableOfContents from '../components/TableOfContents';

import '../styles/prism.scss';

import { Container } from '../styles/StyledComponents';

const BlogContainer = styled(Container)`
  max-width: 840px;
  padding-top:10rem;
`;

const Header = styled.div`
  border-bottom: solid 1px ${props => props.theme.color.gray300};
  margin-bottom: 1.5rem;
`;

const Date = styled.p`
  color: ${props => props.theme.color.pink500};
  font-size: 1.5rem;
  text-align:center;
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  font-size: 4rem;
`;

const Description = styled.p`
  color: ${props => props.theme.color.gray500};
  margin: 1.5rem 0;
`;

const PostContentWrapper = styled.div`
  hr {
    margin: 3rem 0;
    border-color: transparent;
  }
  h2 {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: solid 1px ${props => props.theme.color.gray300};
    font-size: 2.8rem;
  }
  h3 {
    color: ${props => props.theme.color.pink500};
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  p + p {
    margin-top: 1.5em;
  }
  ul {
    margin-bottom: 1.5rem;
  }
  code {
    background: ${props => props.theme.color.gray200};
    display: inline-block;
    padding: 0.15rem 0.35rem;
  }
  pre > code {
    background: transparent;
  }
`;

const Tags = styled.div`
  display:flex;
  flex-wrap: wrap;
`;

const TagLink = styled(Link)`
  margin-right: 0.25rem;
  display: block;
  background: ${props => props.theme.color.gray200};
  font-size: 1.4rem;
  line-height: 3rem;
  border-radius: 1.5rem;
  padding: 0 1.5rem;
  color: ${props => props.theme.color.black};
  &:hover{
    text-decoration: none;
    background: ${props => props.theme.color.pink500};
    color: #FFF;
  }
`;

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
    <BlogContainer>
      {helmet || ''}

      <article>

        <Header>
          <Date>{date}</Date>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Header>

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

        <PostContentWrapper>
          <PostContent content={content} />
        </PostContentWrapper>

        <footer>
          {tags && tags.length ? (
            <Tags style={{ marginTop: '4rem' }}>
              {tags.map(tag => (
                <TagLink key={`${tag}tag`} to={`/tags/${kebabCase(tag)}/`}>{tag}</TagLink>
              ))}
            </Tags>
          ) : null}
        </footer>

      </article>

      <DiscussionEmbed {...disqusConfig} />

    </BlogContainer>
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
