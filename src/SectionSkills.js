import React, { useState } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { ReactComponent as Icon } from './images/settings-black-18dp.svg';
import Section from './Section';
import SectionContent from './SectionContent';
import SectionTitle from './SectionTitle';
import theme from './theme';

const useStyles = createUseStyles({
  content: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },

  table: {
    width: '30%',
    padding: '10px 0',
    minWidth: '200px',
    border: '0',
    backgroundColor: 'transparent'
  },
  td: {
    padding: '2px 10px'
  },
  tdStars: {
    minWidth: '100px',
    textAlign: 'center'
  },
  tdTech: {
    textAlign: 'left',
    width: '60%'
  },
  rater: {
    display: 'flex',
    width: '100%',
    height: '10px'
  },
  rate: {
    border: '1px solid grey',

    flex: '1 0 auto',
    height: '8px'
  },
  rateOn: {
    backgroundColor: theme.color.bg.dark
  },
  rateOff: {}
});

function SkillLine({ tech, rate }) {
  const classes = useStyles();
  const rates = [];
  for (let cpt = 0; cpt < 5; cpt++) {
    const key = `rate-${cpt}`;
    rates.push(<div key={key} className={classes.rate + ' ' + (cpt < rate ? classes.rateOn : classes.rateOff)} />);
  }
  return (
    <tr>
      <td className={classes.td + ' ' + classes.tdTech}>{tech}</td>
      <td className={classes.td + ' ' + classes.tdStars}>
        <div className={classes.rater}>{rates}</div>
      </td>
    </tr>
  );
}

function SectionSkills({ intl }) {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapse(isCollapsed) {
    setCollapsed(isCollapsed);
  }

  const englishTechnical = intl.formatMessage({ id: 'str.skills.english.technical' });
  const englishFluent = intl.formatMessage({ id: 'str.skills.english.fluent' });
  return (
    <Section>
      <SectionTitle icon={<Icon />} collapsed={collapsed} onCollapsed={handleCollapse}>
        <FormattedMessage id="str.skills.title" />
      </SectionTitle>
      <SectionContent collapsed={collapsed}>
        <div className={classes.content}>
          <table className={classes.table}>
            <tbody>
              <SkillLine key="js" tech="JavaScript/TypeScript" rate={5} />
              <SkillLine key="react" tech="React/Redux" rate={5} />
              <SkillLine key="vue" tech="Vue" rate={2} />
              <SkillLine key="bootstrap" tech="Bootstrap/MUI" rate={4} />
              <SkillLine key="node" tech="Node.js/Express" rate={4} />
              <SkillLine key="next" tech="NextJS" rate={2} />
              <SkillLine key="meteor" tech="Meteor.js" rate={3} />
            </tbody>
          </table>
          <table className={classes.table}>
            <tbody>
              <SkillLine key="jest" tech="Jest/Enzyme" rate={3} />
              <SkillLine key="cypress" tech="Cypress/Puppeteer" rate={2} />
              <SkillLine key="git" tech="Git" rate={4} />
              <SkillLine key="github" tech="GitHub" rate={4} />
              <SkillLine key="scrum" tech="Agile/Scrum" rate={3} />
              <SkillLine key="jen" tech="Jenkinsfile" rate={2} />
              <SkillLine key="dock" tech="Docker" rate={3} />
            </tbody>
          </table>
          <table className={classes.table}>
            <tbody>
              <SkillLine key="rest" tech="RestAPI" rate={4} />
              <SkillLine key="graph" tech="GraphQL" rate={3} />
              <tr>
                <td>
                  <br />
                  <br />
                </td>
              </tr>
              <SkillLine key="ten" tech={englishTechnical} rate={4} />
              <SkillLine key="cen" tech={englishFluent} rate={3} />
            </tbody>
          </table>
        </div>
      </SectionContent>
    </Section>
  );
}

export default injectIntl(SectionSkills);
