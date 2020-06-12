import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  sectionContent: {}
})

function SectionContent({children}){
  const classes = useStyles();

  return (<div className={classes.sectionContent}>
    {children}
  </div>)
}

export default SectionContent ;