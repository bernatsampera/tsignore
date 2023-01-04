import React from 'react';
import { Link } from 'gatsby';
import Toggle from './Toggle';
import Helmet from 'react-helmet';

import { rhythm, scale } from '../utils/typography';

class Layout extends React.Component {
  state = {
    theme: null,
  };
  componentDidMount() {
    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }
  renderHeader() {
    const { location, title } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    if (location.pathname === rootPath) {
      return (
        <h1
          style={{
            ...scale(0.75),
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'var(--textTitle)',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      return (
        <h3
          style={{
            fontFamily: 'Raleway, sans-serif',
            marginTop: 0,
            marginBottom: 0,
            height: 42, // because
            lineHeight: '2.625rem',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#38598b',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      );
    }
  }
  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          color: 'var(--textNormal)',
          background: 'var(--bg)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
          minHeight: '100vh',
        }}
      >
        <Helmet
          meta={[
            {
              name: 'theme-color',
              content: this.state.theme === 'light' ? '#ffa8c5' : '#282c35',
            },
          ]}
        />
        <div
          style={{
            fontFamily: 'Raleway',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(35),
            padding: `2.625rem ${rhythm(3 / 4)}`,
          }}
        >
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2.625rem',
            }}
          >
            {this.renderHeader()}
          </header>
          {children}
          <div
            id="theme-toggle"
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
            }}
          >
            {this.state.theme !== null ? (
              <Toggle
                icons={{
                  checked: (
                    <div
                      style={{
                        backgroundColor: 'black',
                        height: '16px',
                        borderRadius: '10px',
                      }}
                    />
                  ),
                  unchecked: (
                    <div
                      style={{
                        backgroundColor: 'white',
                        height: '16px',
                        borderRadius: '10px',
                      }}
                    />
                  ),
                }}
                checked={this.state.theme === 'dark'}
                onChange={e =>
                  window.__setPreferredTheme(
                    e.target.checked ? 'dark' : 'light'
                  )
                }
              />
            ) : (
              <div style={{ height: '24px' }} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
