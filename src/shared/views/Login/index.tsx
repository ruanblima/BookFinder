import React, { useState } from 'react';
import { useFormik } from 'formik';

import { useDispatch } from 'react-redux';
import ButtonGlobal from '~/shared/components/ButtonGlobal';
import Input from '~/shared/components/Input';

import { loginUserAction } from '~/shared/store/ducks/user/actions';

import validationSchema from './validations';

import * as S from './styles';

interface DataFormProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const login = (data: DataFormProps) => {
    dispatch(loginUserAction(data.email, data.password));
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
