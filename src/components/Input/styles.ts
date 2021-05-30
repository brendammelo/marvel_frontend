import styled from 'styled-components/native'
import {RFPercentage} from 'react-native-responsive-fontsize'

export const InputText = styled.TextInput`
height: ${RFPercentage(8)}px;
width: ${RFPercentage(45)}px;
border-radius: 5px;
margin-top: ${RFPercentage(1)}px;
background-color:${({theme}) => theme.colors.primary_lighter};
color: ${({theme}) => theme.colors.text_light};
padding-left: ${RFPercentage(2)}px;
`;
