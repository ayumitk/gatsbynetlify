import React, { Component } from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

import { FaGlobe } from 'react-icons/fa';

const languageName = {
  en: 'English',
  ja: '日本語',
};

class SwitchLanguage extends Component {
  render() {
    return (
      <div className="switch-language">
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) => languages.map(language => (
            <button
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                display: currentLocale === language ? 'none' : 'block',
              }}
              className="switch-language__link"
              type="button"
            >
              <FaGlobe />
              {languageName[language]}
            </button>
          ))}
        </IntlContextConsumer>
      </div>
    );
  }
}

export default SwitchLanguage;
