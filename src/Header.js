import React from 'react';
import {FormattedMessage,injectIntl} from 'react-intl';
import {createUseStyles} from 'react-jss';
import flagEn from './images/flag-en.png';
import flagFr from './images/flag-fr.png';
import {ReactComponent as LinkedInIcon} from './images/linkedin.svg';
import myFace from './images/maFace.jpg';
import theme from './theme';

const useStyles = createUseStyles({
  hideOnSmall: {
    '@media (max-width: 800px)': {
      display: 'none'
    },
  },
  header: {
    backgroundColor: theme.color.bg.dark,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    'flexWrap': 'wrap',
    '@media (max-width: 800px)': {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  identity: {
    display: 'flex',
    flex: '1 1 33%'
  },
  myFace: {
    margin: '20px 20px 20px 40px',
    borderRadius: '50%',
    width: '100px',
    boxShadow: '0 0 10px #555555'
  },

  locate: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontSize: '1.1em',
    color: 'white',
    textShadow: '2px 2px 2px #2b003a'
  },
  name: {
    fontSize: '1.2em',
    fontWeight: 'bold'
  },
  role: {
    // backgroundColor: theme.color.bg.light,
    color: 'white',
    fontSize: '1.4em',
    flex: '1 1 33%',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textShadow: '4px 4px 2px #2b003a',
    '@media (max-width: 800px)': {
      fontSize: '1.1em',
    },
  },
  linkedInIcon: {
    backgroundColor: 'white',
    borderRadius: '5px',
    width: '25px',
    height: '25px',
    verticalAlign: 'bottom',
    margin: '2px 6px 0 0'
  },
  linkedInLink: {
    color: '#00b8ff',
    textDecoration: 'none',
    fontSize: '0.9em'
  },
  empty: {
    flex: '1 1 33%'
  },
  lang: {
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
    opacity: '0.9',
    '&:hover': {
      opacity: '1',
    }
  },
  flag: {
    width: '30px',
  }
})

function Header({language, onChangeLanguage, intl}) {
  const classes = useStyles();

  function handleLangClick() {
    onChangeLanguage(language === 'fr' ? 'en' : 'fr');
  }

  const langTooltip = intl.formatMessage({id: 'str.change.language.tooltip'});
  return (
    <header className={classes.header}>
      <div className={classes.identity}>
        <img className={classes.myFace} src={myFace} alt="my face"/>
        <div className={classes.locate}>
          <div className={classes.name}>Julien Allègre</div>
          <div>ju.allegre@gmail.com</div>
          <div>34920 Le Crès</div>
          <div><a className={classes.linkedInLink} href="https://www.linkedin.com/in/julien-all%C3%A8gre-7933bb139"><LinkedInIcon
            className={classes.linkedInIcon}/>LinkedIn</a></div>
        </div>
      </div>
      <div className={classes.role}>
        <span className={classes.hideOnSmall}>&#123;&#123; </span>
        <FormattedMessage id="str.head.role"/>
        <span className={classes.hideOnSmall}> &#125;&#125;</span>
      </div>
      <div className={classes.empty}>&nbsp;</div>
      <div className={classes.lang} onClick={handleLangClick} title={langTooltip}>
        <img className={classes.flag} src={language === 'fr' ? flagEn : flagFr} alt="flag"/>
      </div>
    </header>
  )
}

export default injectIntl(Header)