import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import ButtonGlobal from '~/shared/components/ButtonGlobal';

import { TABS_SCREEN } from '~/shared/constants/routesNames';

import * as S from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <S.TextInput
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
          />
        </S.ContainerInput>
        <S.ContainerInput>
          <S.TextInput
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
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
