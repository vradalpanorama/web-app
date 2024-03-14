import React from 'react'

import cl from 'classnames';
import style from './index.module.scss'
import { Section } from '@/components/_componentsSections';
import { ContentContainer, Lead } from '@/components';

const SectionThree = ({dictionary}) => {
  return (
    <Section>
      <ContentContainer isRowDirection={true}>
        <Lead className={style.lead}>{dictionary['paragraph1']}</Lead>
        <Lead className={style.lead}>{dictionary['paragraph2']}</Lead>
        <Lead className={style.lead}>{dictionary['paragraph3']}</Lead>
      </ContentContainer>
    </Section>
  )
}

export default SectionThree