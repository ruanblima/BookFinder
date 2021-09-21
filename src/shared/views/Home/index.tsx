import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ButtonGlobal from '~/shared/components/ButtonGlobal';
import Input from '~/shared/components/Input';
import { ApplicationState } from '~/shared/store';

import { getBooksAction } from '~/shared/store/ducks/books/actions';

import * as S from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const { loading, listBooks } = useSelector(
    (state: ApplicationState) => state.books,
  );
  const [textSearch, setTextSearch] = useState<string>('');

  console.tron.log('listBooks', listBooks);
  const getBooks = (index: number) => {
    dispatch(getBooksAction(textSearch, index));
  };

  const renderBook = ({ item }) => {
    if (item.volumeInfo.imageLinks === undefined) {
      return null;
    }
    return (
      <S.BookView>
        {/* <S.ImageInfoContainer>
          {item.volumeInfo.imageLinks !== undefined && (
            <S.ImageBook
              source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
            />
          )} */}
        <S.NewTitle fontSize={20}>{item.volumeInfo.title}</S.NewTitle>
        {/* </S.ImageInfoContainer> */}
      </S.BookView>
    );
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
        <S.ContainerHome>
          <S.ContainerButton>
            <ButtonGlobal action={() => getBooks(0)} title="BUSCAR" />
          </S.ContainerButton>

          <S.List
            data={listBooks}
            extraData={listBooks}
            renderItem={renderBook}
            keyExtractor={(item: any) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{ height: 100 }} />}
            refreshing={loading}
            onRefresh={() => getBooks(listBooks.length)}
            onEndReached={() => getBooks(listBooks.length)}
            onEndReachedThreshold={0.2}
          />
        </S.ContainerHome>
      )}
    </S.Container>
  );
};

export default Home;
