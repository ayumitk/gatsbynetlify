import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const languageName = {
  en: 'English',
  ja: '日本語',
};

const SwitchLanguage = () => (
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
          {languageName[language]}
        </button>
      ))}
    </IntlContextConsumer>
  </div>
);

export default SwitchLanguage;
