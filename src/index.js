import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl'
import App from './App';
import messagesEn from './i18n/en.json';
import messagesFr from './i18n/fr.json';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import locale_en from 'react-intl/locale-data/en';
// import locale_de from 'react-intl/locale-data/fr';

const language = navigator.language.split(/[-_]/)[0];
const messages = {
  'de': messagesFr,
  'en': messagesEn
};

// addLocaleData([...locale_en, ...locale_de]);


ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} key={language} messages={messages[language]}>
      <App/>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
