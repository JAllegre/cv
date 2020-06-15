import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
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
  },
  linePeriod: {
    flex: '0 0 100px',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    color: '#909090',
    fontWeight: 'bold'
  },
  lineContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0 0 0 20px'
  },
  lineRole: {
    fontWeight: 'bold'
  },
  lineLocation:{
    color: 'grey'
  }
})

function Line({period, role, location, children}) {
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
        <div>
          {children}
        </div>
      </div>
    </div>
    // <tr className={classes.tr}>
    //   <td className={classes.td + ' ' + classes.tdYear}>{year}</td>
    //   <td className={classes.td + ' ' + classes.tdText}>{children}</td>
    // </tr>
  )
}

function SectionXp() {
  const classes = useStyles()
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapse(isCollapsed) {
    setCollapsed(isCollapsed);
  }

  return (
    <Section>
      <SectionTitle icon={<Icon/>} collapsed={collapsed} onCollapsed={handleCollapse}>
        <FormattedMessage id="str.experiences.title"/>
      </SectionTitle>
      <SectionContent collapsed={collapsed}>
        <div className={classes.content}>
          <Line period='2019 - 2020' role='Leader technique / Ingénieur developpement' location="Intrado/West (Montpellier)">
            <div>Conception et implémentation du front-end et du back-end d'un nouveau portail web ayant pour but d'exposer aux clients leurs données
              d'utilisation et de consommation provenant des bases de données de l'entreprise et mise en forme par Tableau Server.
              Ce portail inclus l'authentification et la gestion des utilisateurs , la mise à disposition des visualisations Tableau

              Design and Implement, from the beginning, the front-end and back-end of a new web portal allowing to expose customer usage data
              coming from big data teams (served by Tableau Server). This include the login authentication (SSO and legacy email invite), database
              connections(Oracle, Postgres) and export ability (csv),

              Implement the CI/CD pipeline to bring the apps from source to production (Github/Jenkins/Artifactory/PCF)
            </div>
          </Line>
          <Line period='2009 - 2019' role='Ingénieur développement Front-End' location="Intercall  (Montpellier)">

            Début de la conception et de l'implémentation du nouveau client web de la solution de téléconférence de l'entreprise en
            React/Redux/Material-ui, tou en essayant de récupéré les composant métiers existant

            Implémentation d'un application QML/Javascript embarqué dans un apareil de téléconférence (Dolby Conference Phone) en utilisant et en
            optimisant fortement les composants métiers de l'application web existante

            Implémentation de divers composants graphique et métiers de l'application de conférence web de l'entreprise basé sur le framework js dojo

            Ces divers projets ce sont fait sein d'une équipe de 5 à 8 personnes en France mais aussi en coordination avec d'autres équipes au US,au
            Canada, en chine et en Inde.
            Depuis le début, utilisation de méthode agiles (scrum)
          </Line>
          <Line period='2009 - 2019' role='Ingénieur développement Front-End' location="Intercall  (Montpellier)">

            Début de la conception et de l'implémentation du nouveau client web de la solution de téléconférence de l'entreprise en
            React/Redux/Material-ui, tou en essayant de récupéré les composant métiers existant

            Implémentation d'un application QML/Javascript embarqué dans un apareil de téléconférence (Dolby Conference Phone) en utilisant et en
            optimisant fortement les composants métiers de l'application web existante

            Implémentation de divers composants graphique et métiers de l'application de conférence web de l'entreprise basé sur le framework js dojo

            Ces divers projets ce sont fait sein d'une équipe de 5 à 8 personnes en France mais aussi en coordination avec d'autres équipes au US,au
            Canada, en chine et en Inde.
            Depuis le début, utilisation de méthode agiles (scrum)
          </Line>
        </div>
      </SectionContent>
    </Section>)
}

export default SectionXp;