import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useFormik } from 'formik';

import ButtonGlobal from '~/shared/components/ButtonGlobal';
import Input from '~/shared/components/Input';

import { TABS_SCREEN } from '~/shared/constants/routesNames';

import validationSchema from './validations';

import * as S from './styles';

interface DataFormProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  const login = (data: DataFormProps) => {
    console.log(data);
    navigation.navigate(TABS_SCREEN);
  };

  const { handleSubmit, dirty, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: login,
    validateOnChange: false,
  });

  return (
    <S.Container>
      <S.ContainerTitle>
        <S.TextTitle>Book Finder</S.TextTitle>
      </S.ContainerTitle>

      <S.Form>
        <S.ContainerInput>
          <Input
            iconLeft="email"
            placeholder="Digite seu email"
            value={values.email}
            onChangeText={handleChange('email')}
            error={errors.email}
          />
        </S.ContainerInput>

        <S.ContainerInput>
          <Input
            iconLeft="lock"
            placeholder="Digite sua senha"
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry={!showPassword}
            actionIcon={() => setShowPassword(!showPassword)}
            iconRight={showPassword ? 'eye-off' : 'eye'}
            error={errors.password}
          />
        </S.ContainerInput>
      </S.Form>

      <S.ContainerButton>
        <ButtonGlobal disabled={!dirty} action={handleSubmit} title="ENTRAR" />
      </S.ContainerButton>
    </S.Container>
  );
};

export default Login;
