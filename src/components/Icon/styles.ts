import styled from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'
import {MaterialIcons, Feather} from '@expo/vector-icons'

export const IconItem = styled(MaterialIcons)`
color: ${({theme}) => theme.colors.secondary};
font-size: ${RFValue(23)}px;
margin-right: 15px;
`;

export const IconFeather = styled(Feather)`
color: ${({theme}) => theme.colors.secondary};
font-size: ${RFValue(20)}px;
margin-right: 15px;
`;
