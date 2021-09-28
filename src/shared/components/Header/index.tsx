import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  incrementFontSize,
  decrementFontSize,
  recoveryFontSize,
} from '~/shared/store/ducks/font/actions';
import { toogleTheme } from '~/shared/store/ducks/theme/actions';

import * as S from './styles';

interface HeaderProps {
  enableNavigation?: boolean;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ enableNavigation, title = '' }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.ContainerAccessibility>
        <S.Button onPress={() => dispatch(toogleTheme())}>
          <S.IconColor />
        </S.Button>
        <S.ContainerFont>
          <S.Button onPress={() => dispatch(decrementFontSize())}>
            <S.DecreaseIncreaseFont>A-</S.DecreaseIncreaseFont>
          </S.Button>
          <S.Button onPress={() => dispatch(recoveryFontSize())}>
            <S.RestoreFont>A</S.RestoreFont>
          </S.Button>
          <S.Button onPress={() => dispatch(incrementFontSize())}>
            <S.DecreaseIncreaseFont>A+</S.DecreaseIncreaseFont>
          </S.Button>
        </S.ContainerFont>
      </S.ContainerAccessibility>
      {enableNavigation && (
        <S.ContainerHeader>
          <S.ButtonLeft onPress={() => navigation.goBack()}>
            <S.IconBack />
          </S.ButtonLeft>
          <S.ContainerTitle>
            <S.Title>{title}</S.Title>
          </S.ContainerTitle>
        </S.ContainerHeader>
      )}
    </S.Container>
  );
};

export const headerOption = {
  header: (props: any) => <Header {...props} />,
};

export default Header;
