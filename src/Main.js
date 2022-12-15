import React from 'react';
import { createUseStyles } from 'react-jss';
import SectionEducation from './SectionEducation';
import SectionInterests from './SectionInterrest';
import SectionSkills from './SectionSkills';
import SectionXp from './SectionXp';
import PrintPageBreaker from './PrintPageBreaker';

const useStyles = createUseStyles({
  main: {
    padding: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '1200px',
    '@media (max-width: 1200px)': {
      padding: '10px 0',
      width: '100%'
    }
  }
});

function Main() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <SectionSkills />
      <SectionXp />
      <PrintPageBreaker />
      <SectionEducation />

      {/* <SectionInterests /> */}
    </main>
  );
}

export default Main;
