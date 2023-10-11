import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  section: {
    //backgroundColor: '#f3f3f3',
    overflow: 'hidden',
    // borderRadius: '4px',
    // border: '1px solid grey',
    // boxShadow: '2px 2px 3px 1px #cecece',
    margin: '0 0 15px 0',
    maxWidth: '1200px',
    width: '100%'
  }
});

function Section({ children }) {
  const classes = useStyles();
  return <div className={classes.section}>{children}</div>;
}

export default Section;
