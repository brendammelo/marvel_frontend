import React from 'react'

import {Icon} from '../../components/Icon'

import
{
  Container,
  Title,
  ContainerIcon
}
from './styles'

interface Props {
  title: string;
  icon: string
  type?: string;
}

export function Card({title, icon, type}: Props){
  return(
    <Container activeOpacity={0.7}>
      <ContainerIcon>
      <Icon name={icon} type={type}/>
      </ContainerIcon>
        <Title>{title}</Title>
    </Container>
  )
}
