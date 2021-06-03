import React, {useEffect, useState} from 'react';
import {API_KEY, API_HASH} from 'react-native-dotenv'

import api from '../../services/api'

import {List} from '../../components/List'
import {Card} from '../../components/Card';
import {FilterSearch} from '../../components/FilterSearch'
import {Button} from '../../components/Button'
import {Icon} from '../../components/Icon'
import {Loading} from '../../components/Loading'
import {
  Container,
  Header,
  Greeting,
  Name,
  CardContainer,
  GreetingContainer,
  LogoutContainer,
  ListContainer,
  ButtonContainer,
  LoadingContainer
}
from './styles'
import { ActivityIndicator } from 'react-native';



export function Home(){
  const [comics, setComics] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [loadingPage, setLoadingPage] = useState(false)
  const [currentPage, setCurrentPage] = useState(20)


  useEffect(() => {
    //setIsLoading(true)
    async function getComics(){
      try{
        const {data} = await api.get('/v1/public/comics?',{
          params:{
            ts: 1,
            apikey: API_KEY,
            hash: API_HASH,
            offset: currentPage
          }
        })

        setComics([...comics, ...data.data.results])
        setIsLoading(false)
        console.log(comics, 'DATA')
      } catch(err){
        console.log('erro')
      }
    }
    getComics();
  }, [currentPage])

  console.log(comics)

const renderFooter = () =>{
    return(
      isLoading ?
      <LoadingContainer>
        <ActivityIndicator size="large"/>
      </LoadingContainer> : null
    )
  }

  const handleLoadMore = () => {
    console.log('dispatch handle add more')
    setCurrentPage(currentPage + 20)
    setIsLoading(true)
  }

  return(
    <Container>
      {/* {isLoading && <Loading/>} */}
      <Header>
        <LogoutContainer>
          <GreetingContainer>
            <Greeting>Olá, </Greeting>
            <Name>Brenda!</Name>
          </GreetingContainer>
          <Icon name='power' type='feather'/>
        </LogoutContainer>
        <CardContainer>
          <Card title='Home' icon='home' type='feather'/>
          <Card title='Favoritos' icon='favorite-border'/>
          <Card title='Perfil' icon='person-outline'/>
        </CardContainer>
        <FilterSearch/>
      </Header>
      <ListContainer>
        <List
          data={comics}
          ListFooterComponent={renderFooter}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
        />
      </ListContainer>
      <ButtonContainer>
        <Button title='Salvar favoritos'/>
      </ButtonContainer>

    </Container>
  )
}
