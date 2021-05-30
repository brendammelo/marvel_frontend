import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background} ;
`;

export const GreetingContainer = styled.View`
`;

export const LogoutContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFPercentage(3)}px;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(30)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Greeting = styled.Text`
  color: ${({theme}) => theme.colors.text_light};
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  margin-left: ${RFPercentage(3)}px;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.text_light};
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  margin-left: ${RFPercentage(3)}px;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary_light};
  font-size: ${RFValue(25)}px;
`;


export const ListContainer = styled.View`
  margin-top: ${RFPercentage(5)}px;
`;
