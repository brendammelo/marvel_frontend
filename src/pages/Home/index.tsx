import React from 'react';

import {ListItem} from '../../components/ListItem'
import {Card} from '../../components/Card';
import {FilterSearch} from '../../components/FilterSearch'
import {
  Container,
  Header,
  Greeting,
  Name,
  CardContainer,
  GreetingContainer,
  LogoutContainer,
  Icon,
  ListContainer
}
from './styles'



export function Home(){
  return(
    <Container>
      <Header>
        <LogoutContainer>
          <GreetingContainer>
            <Greeting>Olá, </Greeting>
            <Name>Brenda!</Name>
          </GreetingContainer>
          <Icon name='power'/>
        </LogoutContainer>
        <CardContainer>
          <Card title='Perfil' icon='user'/>
          <Card title='Favoritos' icon='heart'/>
          <Card title='Perfil' icon='user'/>
        </CardContainer>
        <FilterSearch/>
      </Header>
      <ListContainer>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </ListContainer>

    </Container>
  )
}
