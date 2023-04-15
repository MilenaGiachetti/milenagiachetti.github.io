import React from 'react'
import { useTranslation } from 'react-i18next';

type Props = {}

function Home({}: Props) {
  const [t, i18n] = useTranslation();
  const yearsOfExperience = 2.5

  return (
    // title
    // model
    // about me
    // contact
    // projects
    // technologies
    // experience
    // education
    <div>{t('about_me.text', {years: yearsOfExperience})}</div>
  )
}

export default Home