import React, { Component } from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { FaGlobe } from 'react-icons/fa';

const languageName = {
  en: 'English',
  ja: '日本語',
};

const Button = styled.button`
  background: transparent;
  border: 0;
  @media (min-width: 768px) {
    padding: 0;
    color: ${props => props.theme.color.black};
    &:hover{
      text-decoration: underline;
      opacity: 0.8;
    }
  }
  @media (max-width: 767.98px) {
    display: none;
    color: #FFF;
    width: 100%;
    padding: 1.5rem;
  }
`;

class SwitchLanguage extends Component {
  render() {
    return (
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => languages.map(language => (
          <Button
            key={language}
            onClick={() => changeLocale(language)}
            style={{
              display: currentLocale === language ? 'none' : 'block',
            }}
            className="switch-language__link"
            type="button"
          >
            <FaGlobe style={{ verticalAlign: 'text-top', marginRight: '0.5rem' }} />
            {languageName[language]}
          </Button>
        ))}
      </IntlContextConsumer>
    );
  }
}

export default SwitchLanguage;
