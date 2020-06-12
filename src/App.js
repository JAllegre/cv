import React from 'react';
import {createUseStyles} from 'react-jss'
import './App.css';
import SectionSkills from './SectionSkills';

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  main: {
    padding: '10px'
  },
  section: {},
  sectionTitle: {
    backgroundColor: '#008bc7',
    display: 'flex',
    borderRadius: '20px',
    fontSize: '1.1em',
    padding: '4px 10px'
  },
  sectionContent: {}
})

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <header className={classes.header}>
        header
      </header>
      <main className={classes.main}>
        <SectionSkills/>
        <SectionSkills/>
        <SectionSkills/>
        <SectionSkills/>
        {/*      <SectionSkills/>*/}
        {/*  <div className={classes.section}>*/}
        {/*    <div className={classes.sectionTitle}>*/}
        {/*      <img src={skillsIcon} alt="logo" />*/}
        {/*      <FormattedMessage*/}
        {/*        id="str.app.skills"*/}
        {/*      /></div>*/}
        {/*  <div className={classes.sectionContent}>Blabla bla</div>*/}
        {/*</div>*/}
        {/*  <div className={classes.section}>*/}
        {/*    <FormattedMessage*/}
        {/*      id="str.app.professional.experiences"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className={classes.section}>*/}
        {/*    <FormattedMessage*/}
        {/*      id="str.app.formations"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className={classes.section}>*/}
        {/*    <FormattedMessage*/}
        {/*      id="str.app.personal.interest"*/}
        {/*    />*/}
        {/*  </div>*/}
      </main>
    </div>
  );
}

export default App;
