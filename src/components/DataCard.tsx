import React, { type ReactElement } from 'react'
import { CardContainer, Certificate, Dates, DescriptionItem, DescriptionList, InvertTitle, Position, Stack } from '../styles/dateCard.styled'
import { useTranslation } from 'react-i18next'

interface Props {
  title: string
  institution: string
  institutionWebsite?: string
  initialDate: Date
  finalDate: Date | null
  stack?: string[]
  description?: string
  descriptionList?: string[]
  certificate?: string
}

const DataCard = ({
  title,
  institution,
  institutionWebsite,
  initialDate,
  finalDate,
  stack,
  description,
  descriptionList,
  certificate
}: Props): ReactElement => {
  const [t] = useTranslation()
  const shortFormatDate = (date: Date): string => date.toLocaleDateString('en-GB', {
    month: 'short', year: 'numeric'
  })
  return (
    <CardContainer>
      <InvertTitle>
        <div>
          <Position>{title} | {institution}</Position>
          {
            (institutionWebsite != null) &&
            <a href={institutionWebsite} target='_blank' rel='noreferrer nofollow'></a>
          }
        </div>
        <Dates>{shortFormatDate(initialDate)} - {(finalDate != null) ? shortFormatDate(finalDate) : 'present'}</Dates>
      </InvertTitle>
      {
        (stack != null) &&
        <Stack>{stack?.join(' | ')}</Stack>
      }
      {
        (description != null) &&
        <p>{t(description)}</p>
      }
      {
        (descriptionList != null) &&
        <DescriptionList>
          {
            descriptionList.map((item) => (
              <DescriptionItem key={item}>{t(item)}</DescriptionItem>
            ))
          }
        </DescriptionList>
      }
      {
        (certificate != null) &&
        <Certificate>{t('education.certificate')}</Certificate>
      }
    </CardContainer>
  )
}

export default DataCard
