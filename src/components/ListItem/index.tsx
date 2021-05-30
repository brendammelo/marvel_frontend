import React from 'react'

import {Comic} from '../../assets'

import
{
  Container,
  Image,
  ContainerText,
  Title,
  Description,
  Icon
}
from './styles'


export function ListItem(){
  return(
    <Container>
      <Image source={Comic}/>
      <ContainerText>
        <Title>Thor</Title>
        <Description>Thor first comic, the leader of sales</Description>
      </ContainerText>
      <Icon name='heart'/>
    </Container>
  )
}
