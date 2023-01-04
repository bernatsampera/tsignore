import { Link, graphql } from 'gatsby';
import { formatPostDate, formatReadingTime } from '../utils/helpers';

import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Panel from '../components/Panel';
import React from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
import { rhythm } from '../utils/typography';
import './blog-index.css';

const NUMBER_OF_RECENT_POSTS = 3;

class BlogIndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const langKey = this.props.pageContext.langKey;

    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <aside>
          <Bio />
        </aside>
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
          <div
            style={{
              minWidth: '400px',
            }}
          >
            <h2> Recent Posts </h2>
            <div id="recent-posts-container">
              {posts.slice(0, NUMBER_OF_RECENT_POSTS).map(({ node }) => {
                const title =
                  get(node, 'frontmatter.title') || node.fields.slug;
                return (
                  <article
                    key={node.fields.slug}
                    style={{
                      width: rhythm(10),
                    }}
                  >
                    <header>
                      <h3
                        style={{
                          fontFamily: 'Raleway, sans-serif',
                          fontSize: rhythm(1),
                          margin: `${rhythm(1 / 5)} 0`,
                        }}
                      >
                        <Link
                          style={{ boxShadow: 'none' }}
                          to={node.fields.slug}
                          rel="bookmark"
                        >
                          {title}
                        </Link>
                      </h3>
                      <small>
                        {formatPostDate(node.frontmatter.date, langKey)}
                        {` • ${formatReadingTime(node.timeToRead)}`}
                      </small>
                    </header>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.spoiler,
                      }}
                    />
                  </article>
                );
              })}
            </div>
          </div>
          <div>
            <h2> All Posts </h2>

            {posts.slice(NUMBER_OF_RECENT_POSTS).map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug;
              return (
                <article key={node.fields.slug}>
                  <header>
                    <h3
                      style={{
                        fontFamily: 'Raleway, sans-serif',
                        fontSize: rhythm(1),
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{ boxShadow: 'none' }}
                        to={node.fields.slug}
                        rel="bookmark"
                      >
                        {title}
                      </Link>
                    </h3>
                    <small>
                      {formatPostDate(node.frontmatter.date, langKey)}
                      {` • ${formatReadingTime(node.timeToRead)}`}
                    </small>
                  </header>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.spoiler,
                    }}
                  />
                </article>
              );
            })}
          </div>
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`;
