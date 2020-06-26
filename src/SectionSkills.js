import React, {useState} from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import {createUseStyles} from 'react-jss';
import {ReactComponent as Icon} from './images/settings-black-18dp.svg';
import Section from './Section';
import SectionContent from './SectionContent';
import SectionTitle from './SectionTitle';
import theme from './theme';

const useStyles = createUseStyles({
  content: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },

  table: {
    minWidth: '350px',
    border: '0',
    backgroundColor: 'transparent'
  },
  tr: {},
  td: {
    padding: '2px 10px',
    backgroundColor: '#f6f6f6',
  },
  tdStars: {
    textAlign: 'center'
  },
  tdTech: {
    textAlign: 'left',
    width: '60%'
  },
  rater: {
    display: 'flex',
    width: '100%',
    height: '10px',
  },
  rate: {
    //borderRight: '1px solid grey',
    borderTop: '1px solid grey',
    borderBottom: '1px solid grey',
    borderLeft: '1px solid grey',
    '&:last-child':{
      borderRight: '1px solid grey',
    },
    flex: '1 0 auto',
    height: '8px'
  },
  rateOn: {
   backgroundColor: theme.color.bg.dark
  },
  rateOff: {}
})

function SkillLine({tech, rate}) {
  const classes = useStyles()
  const rates = [];
  for (let cpt = 0; cpt < 5; cpt++) {

    rates.push(<div className={classes.rate + ' ' + (cpt < rate ? classes.rateOn : classes.rateOff)}/>)

  }
  //let rates = (new Array(rate)).fill('', 0, 5).map((value, index) => {

  //return (<IconRate key={String(index)}/>);
  //})
  return (
    <tr className={classes.tr}>
      <td className={classes.td + ' ' + classes.tdTech}>{tech}</td>
      <td className={classes.td + ' ' + classes.tdStars}>
        <div className={classes.rater}>{rates}</div>
      </td>
    </tr>
  )
}

function SectionSkills({intl}) {
  const classes = useStyles()
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapse(isCollapsed) {
    setCollapsed(isCollapsed);
  }

  const englishTechnical = intl.formatMessage({id: 'str.skills.english.technical'});
  const englishFluent = intl.formatMessage({id: 'str.skills.english.fluent'});
  return (
    <Section>
      <SectionTitle icon={<Icon/>} collapsed={collapsed} onCollapsed={handleCollapse}>
        <FormattedMessage id="str.skills.title"/>
      </SectionTitle>
      <SectionContent collapsed={collapsed}>
        <div className={classes.content}>
          <table className={classes.table}>
            <tbody>
            <SkillLine key="js" tech='Javascript/ES6' rate={5}/>
            <SkillLine key="react" tech='React/Material-ui/Redux' rate={5}/>
            <SkillLine key="html" tech='HTML5/CSS3' rate={5}/>
            <SkillLine key="node" tech='nodejs/expressJS' rate={5}/>
            <SkillLine key="dojo" tech='Dojo' rate={4}/>
            <SkillLine key="java" tech='Java' rate={2}/>
            <SkillLine key="c" tech='C++' rate={2}/>
              </tbody>
          </table>
          <table className={classes.table}>
            <tbody>
            <SkillLine key="jest" tech='Jest/Enzyme' rate={3}/>
            <SkillLine key="pupet" tech='Puppeteer' rate={1}/>
            <SkillLine key="git" tech='Git/GitHub' rate={4}/>
            <SkillLine key="scrum" tech='Agile/Scrum/JIRA' rate={3}/>
            <SkillLine key="jen" tech='Jenkinsfile' rate={3}/>
            <SkillLine key="dock" tech='Docker' rate={2}/>
            <SkillLine key="pcf" tech='Pivotal Cloud Foundry' rate={3}/>
            </tbody>
          </table>
          <table className={classes.table}>
            <tbody>
            <SkillLine key="ten" tech={englishTechnical} rate={5}/>
            <SkillLine key="cen" tech={englishFluent} rate={3}/>
            </tbody>
          </table>
        </div>
      </SectionContent>
    </Section>)
}

export default injectIntl(SectionSkills);