import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {createUseStyles} from 'react-jss';
import {ReactComponent as Icon} from './images/settings-black-18dp.svg';
import {ReactComponent as IconRate} from './images/star_rate-black-18dp.svg';
import Section from './Section';
import SectionContent from './SectionContent';
import SectionTitle from './SectionTitle';
import theme from './theme';

const useStyles = createUseStyles({
  content: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  },

  table: {
    minWidth: '350px',
    border: '0',
    backgroundColor: 'transparent',
    padding: '10px'
  },
  tr: {},
  td: {
    padding: '2px 10px',
    backgroundColor: theme.color.bg.light,
  },
  tdStars: {
    textAlign: 'center'
  },
  tdTech: {
    textAlign: 'left',
    width: '60%'
  }
})

function SkillLine({tech, rate}) {
  const classes = useStyles()
  let rates = (new Array(rate)).fill('', 0, 5).map((value,index)=>{
    return(<IconRate key={String(index)}/>);
  })
  return (
    <tr className={classes.tr}>
      <td className={classes.td + ' ' + classes.tdTech}>{tech}</td>
      <td className={classes.td + ' ' + classes.tdStars}>{rates}</td>
    </tr>
  )
}

function SectionSkills() {
  const classes = useStyles()
  const [collapsed,setCollapsed] = useState(false);
  function handleCollapse(isCollapsed){
    setCollapsed(isCollapsed) ;
  }
  return (
    <Section>
      <SectionTitle icon={<Icon/>} collapsed={collapsed} onCollapsed={handleCollapse}>
        <FormattedMessage id="str.skills"/>
      </SectionTitle>
      <SectionContent collapsed={collapsed}>
        <div className={classes.content}>
          <table className={classes.table}>
            <tbody>
            <SkillLine key="js" tech='Javascript/ES6' rate={5}/>
            <SkillLine key="html" tech='HTML5/CSS3' rate={5}/>
            <SkillLine key="react" tech='React/Material-ui/Redux' rate={5}/>
            <SkillLine key="node" tech='NodeJS/ExpressJS' rate={5}/>
            <SkillLine key="java" tech='Java' rate={2}/>
            </tbody>
          </table>
          <table className={classes.table}>
            <tbody>
            <SkillLine key="c" tech='C++' rate={2}/>
            <SkillLine key="git" tech='Git/GitHub' rate={4}/>
            <SkillLine key="scrum" tech='Scrum/JIRA' rate={3}/>
            <SkillLine key="jen" tech='Jenkinsfile' rate={3}/>
            </tbody>
          </table>
          <table className={classes.table}>
            <tbody>
            <SkillLine key="ten" tech='Technical English' rate={4}/>
            <SkillLine key="cen" tech='Current English' rate={3}/>
            </tbody>
          </table>
        </div>
      </SectionContent>
    </Section>)
}

export default SectionSkills;