import styled from 'styled-components/native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${RFPercentage(22)}px;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 10px;
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
   width: ${RFValue(230)}px;
  height: ${RFValue(30)}px;
  flex-shrink: 1;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(17)}px;
  flex-shrink: 1;
  flex: 1;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  text-align: justify;
  width: ${RFValue(230)}px;
  flex-shrink: 1;
  flex: 1;
`;

export const Image = styled.Image`
  height: ${RFPercentage(20)}px;
  width: ${RFPercentage(15)}px;
`;

export const IconImage = styled(Feather)`
  height: ${RFValue(19)}px;
  width: ${RFValue(19)}px;
`;

export const IconContainer = styled.View`
margin-right: 20px;

`;
