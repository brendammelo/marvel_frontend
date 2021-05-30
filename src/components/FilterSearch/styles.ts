import styled from 'styled-components/native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

export const Container = styled.View`
flex-direction: row;
justify-content: center;
`;

export const ContainerIcon = styled.View`
  height: ${RFPercentage(8)}px;
  width: ${RFPercentage(8)}px;
  background-color: ${({theme}) => theme.colors.primary_lighter};
  margin-top: ${RFPercentage(4)}px;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;

export const InputText = styled.TextInput`
height: ${RFPercentage(8)}px;
width: ${RFPercentage(37)}px;
border-bottom-left-radius: 5px;
border-top-left-radius: 5px;
margin-top: ${RFPercentage(4)}px;
background-color:${({theme}) => theme.colors.primary_lighter};
color: ${({theme}) => theme.colors.text_light};
padding-left: ${RFPercentage(2)}px;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(25)}px;
  margin-left: ${RFPercentage(1)}px;
`;
