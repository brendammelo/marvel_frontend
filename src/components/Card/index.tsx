import React from 'react'


import
{
  Container,
  ContainerText,
  Title,
  Icon
}
from './styles'

interface Props {
  title: string;
  icon: string
}

export function Card({title, icon}: Props){
  return(
    <Container>
        <Icon name={icon}/>
        <Title>{title}</Title>
    </Container>
  )
}
