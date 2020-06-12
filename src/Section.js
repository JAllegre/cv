import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  section: {
    border: '1px solid grey',
    boxShadow: '1px 1px 1px grey'
  }
})

function Section({children}) {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      {children}
    </div>)
}

export default Section;