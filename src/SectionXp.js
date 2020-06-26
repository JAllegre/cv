import React, {useState} from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import {createUseStyles} from 'react-jss';
import {ReactComponent as Icon} from './images/handyman-black-18dp.svg';
import Section from './Section';
import SectionContent from './SectionContent';
import SectionTitle from './SectionTitle';

const useStyles = createUseStyles({
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  line: {
    display: 'flex',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  },
  linePeriod: {
    flex: '0 0 100px',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    color: '#878787',
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      flex: '0 0 auto',
      marginBottom: '10px'
    }
  },
  lineContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0 0 0 20px',
    '& ul': {
      paddingInlineStart: '30px'
    },
    '@media (max-width: 600px)': {
      padding: '0 0 0 0',
    }
  },
  lineRole: {
    marginBottom: '10px',
    fontWeight: 'bold'
  },
  lineLocation: {
    //marginBottom: '6px',
    color: '#878787'
  },
  text: {
    marginBottom: '10px',
    textAlign: 'left',
    '& li': {
      paddingBottom: '10px'
    }
  },
  notes: {
    textAlign: 'left',
    margin: '0 0 30px 0'
  }
})

function formatXpText(str = '') {
  return {__html: '<ul><li> ' + str.replace(/\.\. /g, '</li><li>') + '</li></ul>'};
}

function Line({period, role, location, text, notes}) {
  const classes = useStyles()
  return (
    <div className={classes.line}>
      <div className={classes.linePeriod}>
        {period}
      </div>
      <div className={classes.lineContent}>
        <div className={classes.lineRole}>
          {role}
        </div>
        <div className={classes.lineLocation}>
          {location}
        </div>
        <div className={classes.text} dangerouslySetInnerHTML={formatXpText(text)}/>
        {notes && <div className={classes.notes}> {notes}</div>}
      </div>
    </div>
  )
}

function SectionXp({intl}) {
  const classes = useStyles()
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapse(isCollapsed) {
    setCollapsed(isCollapsed);
  }

  const xp1Role = intl.formatMessage({id: 'str.xp1.role'});
  const xp1Location = intl.formatMessage({id: 'str.xp1.location'});
  const xp1Text = intl.formatMessage({id: 'str.xp1.text'});

  const xp2Role = intl.formatMessage({id: 'str.xp2.role'});
  const xp2Location = intl.formatMessage({id: 'str.xp2.location'});
  const xp2Text = intl.formatMessage({id: 'str.xp2.text'});
  const xp2Notes = intl.formatMessage({id: 'str.xp2.notes'});


  const xp3Role = intl.formatMessage({id: 'str.xp3.role'});
  const xp3Location = intl.formatMessage({id: 'str.xp3.location'});
  const xp3Text = intl.formatMessage({id: 'str.xp3.text'});
  const xp3Notes = intl.formatMessage({id: 'str.xp3.notes'});

  return (
    <Section>
      <SectionTitle icon={<Icon/>} collapsed={collapsed} onCollapsed={handleCollapse}>
        <FormattedMessage id="str.experiences.title"/>
      </SectionTitle>
      <SectionContent collapsed={collapsed}>
        <div className={classes.content}>
          <Line period='2019 - 2020' role={xp3Role} location={xp3Location} text={xp3Text} notes={xp3Notes}/>
          <Line period='2010 - 2019' role={xp2Role} location={xp2Location} text={xp2Text} notes={xp2Notes}/>
          <Line period='2000 - 2009' role={xp1Role} location={xp1Location} text={xp1Text}/>
          <div>
          </div>
        </div>
      </SectionContent>
    </Section>
  )

}

export default injectIntl(SectionXp);