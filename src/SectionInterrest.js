import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {createUseStyles} from 'react-jss';
import {ReactComponent as Icon} from './images/extension-black-18dp.svg';
import Section from './Section';
import SectionContent from './SectionContent';
import SectionTitle from './SectionTitle';

const useStyles = createUseStyles({
  text: {

  }
})


function SectionInterests() {
  const classes = useStyles()
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapse(isCollapsed) {
    setCollapsed(isCollapsed);
  }

  return (
    <Section>
      <SectionTitle icon={<Icon/>} collapsed={collapsed} onCollapsed={handleCollapse}>
        <FormattedMessage id="str.interests.title"/>
      </SectionTitle>
      <SectionContent collapsed={collapsed}>
        <div className={classes.text}>
          <FormattedMessage id="str.interests.list"/>
        </div>

      </SectionContent>
    </Section>)
}

export default SectionInterests;