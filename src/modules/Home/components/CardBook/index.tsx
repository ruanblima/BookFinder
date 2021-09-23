import React from 'react';
import { BookProps } from '~/dtos/books';

import * as S from './styles';

interface CardBookProps {
  book: BookProps;
}

const CardBook: React.FC<CardBookProps> = ({ book }) => (
  <S.Touchable>
    <S.Container>
      {/* <S.ImageBook
        source={{ uri: book.volumeInfo.imageLinks.smallThumbnail }}
      /> */}
      <S.TitleBook fontSize={20}>{book.volumeInfo.title}</S.TitleBook>
    </S.Container>
  </S.Touchable>
);

export default CardBook;
