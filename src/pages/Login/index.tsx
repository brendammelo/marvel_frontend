import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native'
import {useForm} from 'react-hook-form'
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

import {Logo} from '../../assets'
import THEME from '../../global/styles/theme'

import {Button} from '../../components/Button'
import {InputForm} from '../../components/InputForm'

import {
  Container,
  Text,
  TextSignUp,
  ContainerText,
  SignUpButton,
  TextSignUpWhite,
  Image
} from './styles'

interface FormData{
  email: string,
  password: string,
}

const schema = Yup.object().shape({
  email: Yup.string().required('Preencha o email'),
  password: Yup.string().required('Preencha a senha')
})




export function Login({navigation}){
  const {control, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

  function handleLogin(form: FormData){
    const data = {
      email: form.email,
      password: form.password
    }

    navigation.navigate('Home')

  console.log(data)
  }

   return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
   <Container>

     <Image source={Logo}/>
        <Text>email</Text>
        <InputForm
          name="email"
          control={control}
          keyboardType='email-address'
          autoCorrect={false}
          selectionColor={THEME.colors.secondary}
          error={errors.email && errors.email.message}
          />
        <Text>senha</Text>
        <InputForm
          name="password"
          control={control}
          secureTextEntry
          selectionColor={THEME.colors.secondary}
          error={errors.password && errors.password.message}
        />
        <Button title='Entrar' activeOpacity={0.8} onPress={handleSubmit(handleLogin)}/>
        <ContainerText>
          <TextSignUpWhite>Não é registrado?</TextSignUpWhite>
          <SignUpButton activeOpacity={0.7} >
            <TextSignUp>Registre-se</TextSignUp>
          </SignUpButton>
        </ContainerText>

    </Container>
  </TouchableWithoutFeedback>
    );
}
