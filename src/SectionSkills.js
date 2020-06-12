import React from 'react';
import {FormattedMessage} from 'react-intl';
import Section from './Section';
import SectionContent from './SectionContent';

import SectionTitle from './SectionTitle';
import icon from './images/psychology-black-18dp.svg';
//import {FormattedMessage} from 'react-intl';
function SectionSkills() {
  return (
    <Section><SectionTitle icon={icon}>
    <FormattedMessage id="str.app.skills" />
  </SectionTitle>
    <SectionContent>
      Bla bla bla
    </SectionContent>
  </Section>)
}

export default SectionSkills;