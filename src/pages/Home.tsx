import React, { type ReactElement } from 'react'

import { useTranslation } from 'react-i18next'
import { ThemeContext } from 'styled-components'

import Contact from '@/components/Contact'
import DataCard from '@/components/DataCard'
import Pill from '@/components/Pill'
import Projects from '@/components/Projects'
import Scene from '@/components/Scene'
import SectionTitle from '@/components/SectionTitle'
import studies from '@/data/studies'
import technologies from '@/data/technologies'
import workExperiences, { firstExperienceDate } from '@/data/workExperiences'
import { AboutMeStyled, NameStyled, PillContainer, PositionHighlightStyled, PositionStyled } from '@/styles/home.styled'
import { getYearsDifference } from '@/utils/date'

function Home (): ReactElement {
  const [t] = useTranslation()
  const yearsOfExperience = getYearsDifference(new Date(), firstExperienceDate)

  return (
    <>
      <section id="home">
        <NameStyled>{t('hero.name')}</NameStyled>
        <PositionStyled><PositionHighlightStyled>{t('hero.specialization')}</PositionHighlightStyled> {t('hero.position')}</PositionStyled>
        <Scene ThemeContext={ThemeContext} />
        <AboutMeStyled>
          {t('about_me.text', { years: yearsOfExperience })}
        </AboutMeStyled>
        <Contact />
      </section>
      <section id="projects">
        <SectionTitle number="00" title={t('projects.title')} />
        <Projects />
      </section>
      <section id="technologies">
        <SectionTitle number="01" title={t('technologies.title')} />
        <PillContainer>
          {
            technologies.map(({ icon, name }) => (
              <Pill icon={icon} name={name} key={name} />
            ))
          }
        </PillContainer>
      </section>
      <section id="work">
        <SectionTitle number="02" title={t('experience.title')} />
        {
          workExperiences.map((data) => (
            <DataCard {...data} key={`${data.title}-${data.institution}`} />
          ))
        }
      </section>
      <section id="studies">
        <SectionTitle number="03" title={t('education.title')} />
        {
          studies.map((data) => (
            <DataCard {...data} key={`${data.title}-${data.institution}`} />
          ))
        }
      </section>
    </>
  )
}

export default Home
