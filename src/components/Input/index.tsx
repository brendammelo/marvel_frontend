import React from 'react'
import {TextInputProps} from 'react-native'

import {InputText} from './styles'

export function Input({...rest}: TextInputProps){
  return(
    <InputText {...rest} />
  )
}
