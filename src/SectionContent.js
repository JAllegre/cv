import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  sectionContent: {
    display: 'flex',
    padding: '15px',
    '@media (max-width: 800px)': {
      padding: '10px 5px'
    }
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
