import React from 'react';
import {createUseStyles} from 'react-jss';
import {ReactComponent as IconMinimize} from './images/minimize-24px.svg';
import {ReactComponent as IconMaximize} from './images/web_asset-24px.svg';
import theme from './theme';

const useStyles = createUseStyles({
  sectionTitle: {
    backgroundColor: theme.color.bg.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '1.1em',
    padding: '4px 8px 4px 4px',
    color: 'white',
    '& svg': {
      fill: 'white',
      width: '20px',
      height: '20px'
    }
  },
  iconAction: {
    justifySelf: 'flex-end',
    cursor:'pointer',
    opacity:'0.9',
    '&:hover':{
      opacity: '1'
    }
  },
  text: {
    flex: '1 1 auto',
    textAlign: 'left',
    paddingLeft: '5px',
    fontWeight: 'bold'
  }
})

function SectionTitle({children, icon, collapsed, onCollapsed}) {
  const classes = useStyles()
  return (<div className={classes.sectionTitle}>
    {icon}
    <div className={classes.text}>{children}</div>
    {collapsed ?
      <IconMaximize className={classes.iconAction} onClick={()=> onCollapsed(false)}/>
      : <IconMinimize className={classes.iconAction} onClick={()=> onCollapsed(true)}/>
    }
  </div>)
}

export default SectionTitle;