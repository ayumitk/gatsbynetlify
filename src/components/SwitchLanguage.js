import React, { Component } from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import LanguageIcon from '../img/language.svg';

const languageName = {
  en: 'English',
  ja: '日本語',
};

const Button = styled.button`
  background: transparent;
  @media (min-width: 768px) {
    padding: 0 0 0 1rem;
    color: ${props => props.theme.color.black};
    border-left: solid 1px #ccc;
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

const StyledLanguageIcon = styled(LanguageIcon)`
  vertical-align: text-top;
  margin-right: 0.25rem;
  width:2rem;
  height: 2rem;
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
            <StyledLanguageIcon />
            {languageName[language]}
          </Button>
        ))}
      </IntlContextConsumer>
    );
  }
}

export default SwitchLanguage;
