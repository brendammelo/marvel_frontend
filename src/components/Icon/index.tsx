import React from 'react'


import {IconItem, IconFeather} from './styles'

interface Icon {
  name: string;
  color?: string;
  type?:string;
}

export function Icon({name, color, type}: Icon){
  return(
    <>
      {type ? <IconFeather name={name}/> :  <IconItem name={name}/>}
    </>
  )

}
