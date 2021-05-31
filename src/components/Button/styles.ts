import styled from 'styled-components/native'
import {RFPercentage} from 'react-native-responsive-fontsize'

export const ButtonGeneric = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: ${RFPercentage(8)}px;
    width: ${RFPercentage(45)}px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.secondary};
`;


export const Title = styled.Text`
    align-self: center;
    font-size: ${RFPercentage(2.5)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text_light}
`;
