import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import ButtonGlobal from '~/shared/components/ButtonGlobal';
import Input from '~/shared/components/Input';

import { TABS_SCREEN } from '~/shared/constants/routesNames';

import * as S from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const login = () => {
    navigation.navigate(TABS_SCREEN);
  };

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
            value={email}
            onChangeText={setEmail}
          />
        </S.ContainerInput>

        <S.ContainerInput>
          <Input
            iconLeft="lock"
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            actionIcon={() => setShowPassword(!showPassword)}
            iconRight={showPassword ? 'eye-off' : 'eye'}
          />
        </S.ContainerInput>
      </S.Form>

      <S.ContainerButton>
        <ButtonGlobal action={login} title="ENTRAR" />
      </S.ContainerButton>
    </S.Container>
  );
};

export default Login;
