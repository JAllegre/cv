import React, { useState } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { ReactComponent as Icon } from './images/handyman-black-18dp.svg';
import PrintPageBreaker from './PrintPageBreaker';
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
    '@media (max-width: 400px)': {
      flexDirection: 'column'
    }
  },
  linePeriod: {
    flex: '0 0 100px',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    color: '#878787',
    fontWeight: 'bold',
    '@media (max-width: 400px)': {
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
      padding: '0 0 0 0'
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
    marginBottom: '0',
    textAlign: 'left',
    '& li': {
      paddingBottom: '10px'
    }
  },
  notes: {
    textAlign: 'left',
    margin: '0 0 30px 0',
    color: '#878787'
  }
});

function formatXpText(str = '') {
  return {
    __html: '<ul><li> ' + str.replace(/\.\. /g, '</li><li>') + '</li></ul>'
  };
}

function Line({ period, role, location, text, notes }) {
  const classes = useStyles();
  return (
    <div className={classes.line}>
      <div className={classes.linePeriod}>{period}</div>
      <div className={classes.lineContent}>
        <div className={classes.lineRole}>{role}</div>
        <div className={classes.lineLocation}>{location}</div>
        <div className={classes.text} dangerouslySetInnerHTML={formatXpText(text)} />
        <div className={classes.notes}>{notes}</div>
      </div>
    </div>
  );
}

function SectionXp({ intl }) {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapse(isCollapsed) {
    setCollapsed(isCollapsed);
  }

  return (
    <Section>
      <SectionTitle icon={<Icon />} collapsed={collapsed} onCollapsed={handleCollapse}>
        <FormattedMessage id="str.experiences.title" />
      </SectionTitle>
      <SectionContent collapsed={collapsed}>
        <div className={classes.content}>
          <Line
            key={'xp5'}
            period="2022 - 2023"
            role={intl.formatMessage({ id: `str.xp5.role` })}
            location={intl.formatMessage({ id: `str.xp5.location` })}
            text={intl.formatMessage({ id: `str.xp5.text` })}
            notes={intl.formatMessage({ id: `str.xp5.notes` })}
          />

          <Line
            key={'xp4'}
            period="2020 - 2022"
            role={intl.formatMessage({ id: `str.xp4.role` })}
            location={intl.formatMessage({ id: `str.xp4.location` })}
            text={intl.formatMessage({ id: `str.xp4.text` })}
            notes={intl.formatMessage({ id: `str.xp4.notes` })}
          />
          <PrintPageBreaker />
          <Line
            key={'xp3'}
            period="2019 - 2020"
            role={intl.formatMessage({ id: `str.xp3.role` })}
            location={intl.formatMessage({ id: `str.xp3.location` })}
            text={intl.formatMessage({ id: `str.xp3.text` })}
            notes={intl.formatMessage({ id: `str.xp3.notes` })}
          />

          <Line
            key={'xp2'}
            period="2010 - 2019"
            role={intl.formatMessage({ id: `str.xp2.role` })}
            location={intl.formatMessage({ id: `str.xp2.location` })}
            text={intl.formatMessage({ id: `str.xp2.text` })}
            notes={intl.formatMessage({ id: `str.xp2.notes` })}
          />

          <Line
            key={'xp1'}
            period="2000 - 2009"
            role={intl.formatMessage({ id: `str.xp1.role` })}
            location={intl.formatMessage({ id: `str.xp1.location` })}
            text={intl.formatMessage({ id: `str.xp1.text` })}
            notes={intl.formatMessage({ id: `str.xp1.notes` })}
          />
        </div>
      </SectionContent>
    </Section>
  );
}

export default injectIntl(SectionXp);
