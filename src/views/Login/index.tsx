import React from 'react';

import * as S from './styles';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <S.Container>
      <S.TitleText>Tela de Login</S.TitleText>
    </S.Container>
  );
};

export default Login;
