import React from 'react';
import {createUseStyles} from 'react-jss';
/*
    <div className={classes.sectionTitle}>
      <img src={skillsIcon} alt="logo"/>
      <FormattedMessage
        id="str.app.skills"
      /></div>
* */

const useStyles = createUseStyles({
  sectionTitle: {
    backgroundColor: '#008bc7',
    display: 'flex',
    borderRadius: '20px',
    fontSize: '1.1em',
    padding: '4px 10px'
  }
})

function SectionTitle({children, icon}) {
  const classes = useStyles()
  return (<div className={classes.sectionTitle}>
    <img src={icon} alt="title-icon" />
    {children}
  </div>)
}

export default SectionTitle;