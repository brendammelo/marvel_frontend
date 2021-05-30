import styled from 'styled-components/native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: ${({theme}) => theme.colors.primary_lighter};
  height: ${RFPercentage(10)}px;
  width: ${RFPercentage(15)}px;
  justify-content: space-evenly;
`;

export const ContainerText = styled.View`
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text_light};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  margin-left: ${RFPercentage(1)}px;
`;


export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(25)}px;
  margin-left: ${RFPercentage(1)}px;
`;
