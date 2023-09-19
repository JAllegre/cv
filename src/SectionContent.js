import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  sectionContent: {
    backgroundColor: '#fafafa',
    display: 'flex',
    padding: '15px'
  },
  none: {
    display: 'none'
  }
});

function SectionContent({ collapsed, children }) {
  const classes = useStyles();
  return <div className={collapsed ? classes.none : classes.sectionContent}>{children}</div>;
}

export default SectionContent;
