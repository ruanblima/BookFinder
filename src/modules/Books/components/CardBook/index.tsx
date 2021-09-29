import { useNavigation } from '@react-navigation/core';
import React from 'react';

import { BookProps } from '~/dtos/books';

import { BOOKS_INFORMATION_SCREEN } from '~/shared/constants/routesNames';

import * as S from './styles';

interface CardBookProps {
  book: BookProps;
}

const CardBook: React.FC<CardBookProps> = ({ book }) => {
  const navigation = useNavigation();
  const goToBookInformation = () => {
    navigation.navigate(BOOKS_INFORMATION_SCREEN, { book });
  };

  return (
    <S.Touchable onPress={() => goToBookInformation()}>
      <S.Container>
        <S.TitleBook fontSize={20}>{book.volumeInfo.title}</S.TitleBook>
      </S.Container>
    </S.Touchable>
  );
};
export default CardBook;
