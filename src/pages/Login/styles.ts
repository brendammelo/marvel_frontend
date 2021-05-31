import styled from 'styled-components/native'
import {RFPercentage} from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary} ;
`;


export const Title = styled.Text`
    font-size: 24px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.text_light}
`;

export const Text = styled.Text`
    align-self: flex-start;
    margin-left: ${RFPercentage(6)}px;
    margin-top: ${RFPercentage(3)}px;
    font-size: ${RFPercentage(2.5)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_light}
`;

export const ContainerButton = styled.View`
  margin-top: ${RFPercentage(6)}px;
`;

export const ContainerText = styled.View`
  flex-direction: row;
`;

export const TextSignUp = styled.Text`
    align-self: center;
    margin-left: ${RFPercentage(1)}px;
    margin-top: ${RFPercentage(3)}px;
    font-size: ${RFPercentage(2.5)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.secondary}
`;

export const TextSignUpWhite = styled.Text`
    align-self: flex-start;
    margin-top: ${RFPercentage(3)}px;
    font-size: ${RFPercentage(2.5)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_light}
`;

export const SignUpButton = styled.TouchableOpacity`
  justify-content: center;
`;

export const Image = styled.Image`
  height: ${RFPercentage(17)}px;
  width: ${RFPercentage(23)}px;
  margin-bottom: 30px;
  align-self: center;
`;
