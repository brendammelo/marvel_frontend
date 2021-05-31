import React from 'react'

import {Comic} from '../../assets'
import {Icon} from '../../components/Icon'

import
{
  Container,
  Image,
  ContainerText,
  Title,
  Description,
  ContainerLeftItems,
  IconImage,
  IconContainer,
  TitleContainer
}
from './styles'

interface image {
  path: URL;
  extension: URL;
}
interface Item {
  image?: image;
  title?: string;
  description?: string;
}

export function ListItem({image, title, description}: Item){
  return(
    <Container>
      <ContainerLeftItems>
        {
        image
        ?
        <Image source={{uri: `${image.path}.${image.extension}`}}/>
        :
        <IconImage/>
        }
        <ContainerText>
          <TitleContainer>
            <Title numberOfLines={1}>{title}</Title>
          </TitleContainer>
          <Description numberOfLines={6}>{description}</Description>
        </ContainerText>
      </ContainerLeftItems>
      <IconContainer>
        <Icon name='favorite-border'/>
      </IconContainer>

    </Container>
  )
}
