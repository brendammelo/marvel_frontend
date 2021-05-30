import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonGeneric, Title } from './styles'

interface ButtonProps extends TouchableOpacityProps{
  title?: string;
}

export function Button({title, ...rest}: ButtonProps){
  return (
    <ButtonGeneric {...rest} >
      <Title>{title}</Title>
    </ButtonGeneric>

  )
}
