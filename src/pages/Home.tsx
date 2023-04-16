import React, { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import workExperiences, { firstExperienceDate } from '../data/workExperiences'
import { getYearsDifference } from '../utils/date'
import { AboutMeStyled, MainContainerStyled, NameStyled, PillContainer, PositionHighlightStyled, PositionStyled } from '../styles/home.styled'
import SectionTitle from '../components/SectionTitle'
import Pill from '../components/Pill'
import technologies from '../data/technologies'
import DataCard from '../components/DataCard'
import studies from '../data/studies'
import Projects from '../components/Projects'

function Home (): ReactElement {
  const [t] = useTranslation()
  const yearsOfExperience = getYearsDifference(new Date(), firstExperienceDate)

  return (
    <MainContainerStyled>
      <NameStyled>{t('hero.name')}</NameStyled>
      <PositionStyled><PositionHighlightStyled>{t('hero.specialization')}</PositionHighlightStyled> {t('hero.position')}</PositionStyled>
      <AboutMeStyled>
        {t('about_me.text', { years: yearsOfExperience })}
      </AboutMeStyled>
      <SectionTitle number="00" title={t('projects.title')} />
      <Projects />
      <SectionTitle number="01" title={t('technologies.title')} />
      <PillContainer>
        {
          technologies.map(({ icon, name }) => (
            <Pill icon={icon} name={name} key={name} />
          ))
        }
      </PillContainer>
      <SectionTitle number="02" title={t('experience.title')} />
      {
        workExperiences.map((data) => (
          <DataCard {...data} key={`${data.title}-${data.institution}`} />
        ))
      }
      <SectionTitle number="03" title={t('education.title')} />
      {
        studies.map((data) => (
          <DataCard {...data} key={`${data.title}-${data.institution}`} />
        ))
      }
    </MainContainerStyled>
  )
}

export default Home
