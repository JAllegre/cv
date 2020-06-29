import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import {createUseStyles} from 'react-jss';
import flagEn from './images/flag-en.png';
import flagFr from './images/flag-fr.png';
import {ReactComponent as LinkedInIcon} from './images/linkedin.svg';
import myFace from './images/maFace.jpg';
import theme from './theme';

const useStyles = createUseStyles({
  hideOnSmall: {
    '@media (max-width: 600px)': {
      display: 'none'
    },
  },
  header: {
    backgroundColor: theme.color.bg.dark,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    'flexWrap': 'wrap',
    padding: '20px 20px',
    '@media (max-width: 600px)': {
      padding: '15px 15px',
    },
  },
  identity: {
    display: 'flex',
    //flex: '0 0 350px'
  },
  myFace: {
    // margin: '20px 20px 20px 40px',
    borderRadius: '50%',
    width: '120px',
    boxShadow: '0 0 10px #555555'
  },

  locate: {
    marginLeft: '15px',
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
    flex: '1 1 auto',
    paddingRight: '25%',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textShadow: '3px 3px 2px #222222',
    '@media (max-width: 1300px)': {
      paddingRight: '0',
    },
    '@media (max-width: 1000px)': {
      fontSize: '1.1em',
      paddingTop: '20px',
    }
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
    fontSize: '0.9em',
    '@media print': {
      display: 'none'
    }
  },
  empty: {
    //flex: '0 0 350px'
  },
  lang: {
    backgroundColor: 'white',
    width: '35px',
    height: '35px',
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '2px 2px 3px black',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
    '&:hover': {
      boxShadow: '4px 4px 4px black',
    },
    '@media print': {
      display: 'none'
    }
  },
  flag: {
    flex: '0 0 auto',
    width: '25px',
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
      {/*<div className={classes.empty}>&nbsp;</div>*/}
      <div className={classes.lang} onClick={handleLangClick} title={langTooltip}>
        <img className={classes.flag} src={language === 'fr' ? flagFr : flagEn} alt="flag"/>
      </div>
    </header>
  )
}

export default injectIntl(Header)