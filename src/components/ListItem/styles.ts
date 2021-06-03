import styled from 'styled-components/native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

export const Container = styled.View`
  flex-direction: row;
  width: 95%;
  height: ${RFPercentage(22)}px;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 10px;
  align-self: center;
  border-radius: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.primary_light};
`;

export const ContainerLeftItems = styled.View`
  margin-left: 8px;
  flex-direction: row;
`;

export const ContainerText = styled.View`
 flex-shrink: 1;
 margin-left: 5px;

`;

export const TitleContainer = styled.View`
   width: ${RFValue(220)}px;
  height: ${RFValue(30)}px;
  flex-shrink: 1;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  flex-shrink: 1;
  flex: 1;
  margin-top: ${RFValue(4)}px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  text-align: justify;
  letter-spacing: 1px;
  width: ${RFValue(220)}px;
  flex-shrink: 1;
  flex: 1;
`;

export const Image = styled.Image`
  height: ${RFPercentage(20)}px;
  width: ${RFPercentage(15)}px;
  align-self: center;
  border-radius: 5px;
  margin-top: ${RFValue(9)}px;
`;

export const IconImage = styled(Feather)`
  height: ${RFValue(20)}px;
  width: ${RFValue(20)}px;

`;

export const IconContainer = styled.View`
margin-right: 25px;
margin-top: ${RFValue(4)}px;

`;
