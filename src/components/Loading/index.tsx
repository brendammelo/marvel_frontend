import React from 'react';
import { ActivityIndicatorProps } from 'react-native';

import { Container, LoadingIndicator } from './styles'

interface Loading extends ActivityIndicatorProps{

}

export function Loading({ ...rest}: Loading){
  return (
    <Container>
      <LoadingIndicator size="large" color='#F3112E' {...rest} />
    </Container>

  )
}
