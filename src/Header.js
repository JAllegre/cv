import React from 'react';
import {FormattedMessage} from 'react-intl';
import {createUseStyles} from 'react-jss';
import flagEn from './images/flag-en.png';
import flagFr from './images/flag-fr.png';
import myFace from './images/maFace.jpg';
import theme from './theme';

const useStyles = createUseStyles({
  header: {
    //background:`url(${headerBg})`,
    backgroundColor: theme.color.bg.dark,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  myFace: {
    margin: '20px 20px 20px 40px',
    borderRadius: '50%',
    width: '150px',
    boxShadow: '0 0 10px #555555'
  },
  ident: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontSize: '1.3em',
    color: 'white',

  },
  name: {
    fontWeight: 'bold'
  },
  title: {
    // backgroundColor: theme.color.bg.light,
    color: 'white',
    fontSize: '25px',
    padding: '20px 30px',
    margin: '0 0 0 50px',
    flex: '1 1 auto',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  empty: {
    flex: '1 1 auto'
  },
  lang: {
    cursor: 'pointer',
    alignSelf: 'flex-start',
    margin: '20px 20px 0 0',
    opacity: '0.9',
    '&:hover': {
      opacity: '1',
    }
  },
  flag: {
    width: '30px',
  }
})

function Header({language, onChangeLanguage}) {
  const classes = useStyles();

  function handleLangClick() {
    onChangeLanguage(language === 'fr' ? 'en' : 'fr');
  }

  return (
    <header className={classes.header}>
      <img className={classes.myFace} src={myFace} alt="my face"/>
      <div className={classes.ident}>
        <div className={classes.name}>Julien Allègre</div>
        <div>ju.allegre@gmail.com</div>
        <div>34920 Le Crès</div>
      </div>

      <div className={classes.title}>&#123;&#123; <FormattedMessage id="str.head.title"/> &#125;&#125;</div>
      <div className={classes.empty}/>
      <div className={classes.lang} onClick={handleLangClick}>
        <img className={classes.flag} src={language === 'fr' ? flagEn : flagFr} alt="flag"/>
      </div>

    </header>
  )
}

export default Header;