import React from 'react'
import { CardContainer, Certificate, Dates, DescriptionItem, DescriptionList, InvertTitle, Position, Stack } from '../styles/dateCard.styled';
import { useTranslation } from 'react-i18next';

type Props = {
  title: string;
  institution: string;
  institution_website?: string;
  initial_date: Date;
  final_date: Date | null;
  stack?: string[];
  description?: string;
  description_list?: string[];
  certificate?: string;
}

const DataCard = ({
  title,
  institution,
  institution_website,
  initial_date,
  final_date,
  stack,
  description,
  description_list,
  certificate
}: Props) => {
  const [t] = useTranslation();
  const shortFormatDate = (date: Date) => date.toLocaleDateString('en-GB', {
    month: 'short', year: 'numeric'
  });
  return (
    <CardContainer>
      <InvertTitle>
        <div>
          <Position>{title} | {institution}</Position>
          {
            institution_website &&
            <a href={institution_website} target='_blank' rel='noreferrer nofollow'></a>
          }
        </div>
        <Dates>{shortFormatDate(initial_date)} - {final_date ? shortFormatDate(final_date) : "present" }</Dates>
      </InvertTitle>
      {
        stack &&
        <Stack>{stack?.join(" | ")}</Stack>
      }
      {
        description &&
        <p>{t(description)}</p>
      }
      {
        description_list &&
        <DescriptionList>
          {
            description_list.map((item) => (
              <DescriptionItem>{t(item)}</DescriptionItem>
            ))
          }
        </DescriptionList>
      }
      {
        certificate &&
        <Certificate>{t('education.certificate')}</Certificate>
      }
    </CardContainer>
  )
}

export default DataCard