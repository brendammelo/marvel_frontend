import React from 'react'
import {TextInputProps} from 'react-native'

import {InputText, Container, ContainerIcon, Icon} from './styles'

export function FilterSearch({...rest}: TextInputProps){
  return(
    <Container>
      <InputText {...rest} />
      <ContainerIcon>
        <Icon name='search'/>
      </ContainerIcon>
    </Container>

  )
}
