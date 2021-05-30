import styled from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'

export const Container = styled.View`

`;

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.secondary_light};
  margin: 4px 0;
`;
