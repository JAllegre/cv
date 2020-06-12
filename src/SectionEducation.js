import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {createUseStyles} from 'react-jss';
import {ReactComponent as Icon} from './images/school-black-18dp.svg';
import Section from './Section';
import SectionContent from './SectionContent';
import SectionTitle from './SectionTitle';

const useStyles = createUseStyles({
  table: {
    minWidth: '350px',
    border: '0',
    backgroundColor: 'transparent',
    padding: '10px'
  },
  tr: {},
  td: {
    padding: '2px 10px',
  },
  tdTest: {
    textAlign: 'center'
  },
  tdYear: {
    textAlign: 'left',
    width: '60%'
  }
})

function Line({year, children}) {
  const classes = useStyles()
  return (
    <tr className={classes.tr}>
      <td className={classes.td + ' ' + classes.tdYear}>{year}</td>
      <td className={classes.td + ' ' + classes.tdTest}>{children}</td>
    </tr>
  )
}

function SectionEducation() {
  const classes = useStyles()
  const [collapsed,setCollapsed] = useState(false);
  function handleCollapse(isCollapsed){
    setCollapsed(isCollapsed) ;
  }
  return (
    <Section>
      <SectionTitle icon={<Icon/>} collapsed={collapsed} onCollapsed={handleCollapse}>
        <FormattedMessage id="str.formations"/>
      </SectionTitle>
      <SectionContent collapsed={collapsed}>
        <table className={classes.table}>
          <tbody>
          <Line year='1997'>IUT...</Line>
          <Line year='1997'>IUT...</Line>
          </tbody>
        </table>
      </SectionContent>
    </Section>)
}

export default SectionEducation;