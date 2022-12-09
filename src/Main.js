import React from 'react';
import { createUseStyles } from 'react-jss';
import SectionEducation from './SectionEducation';
import SectionInterests from './SectionInterrest';
import SectionSkills from './SectionSkills';
import SectionXp from './SectionXp';
import PrintPageBreaker from './PrintPageBreaker';

const useStyles = createUseStyles({
  main: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

function Main() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <SectionXp />
      <PrintPageBreaker />
      <SectionEducation />
      <SectionSkills />
      <SectionInterests />
    </main>
  );
}

export default Main;
