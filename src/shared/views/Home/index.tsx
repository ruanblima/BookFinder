import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonGlobal from '~/shared/components/ButtonGlobal';
import Input from '~/shared/components/Input';
import { ApplicationState } from '~/shared/store';

import { getBooksAction } from '~/shared/store/ducks/books/actions';

import * as S from './styles';

const Home: React.FC = () => {
  const { loading } = useSelector((state: ApplicationState) => state.books);
  const [textSearch, setTextSearch] = useState<string>('');

  const dispatch = useDispatch();

  const getBooks = () => {
    dispatch(getBooksAction(textSearch));
  };

  return (
    <S.Container>
      <S.Form>
        <S.ContainerInput>
          <Input value={textSearch} onChangeText={setTextSearch} />
        </S.ContainerInput>
      </S.Form>
      {loading ? (
        <S.Indicator />
      ) : (
        <S.ContainerButton>
          <ButtonGlobal action={getBooks} title="BUSCAR" />
        </S.ContainerButton>
      )}
    </S.Container>
  );
};

export default Home;
