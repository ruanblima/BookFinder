import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '~/shared/components/Input';
import { ApplicationState } from '~/shared/store';

import { getBooksAction } from '~/shared/store/ducks/books/actions';
import CardBook from './components/CardBook';

import * as S from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const { loading, listBooks } = useSelector(
    (state: ApplicationState) => state.books,
  );
  const [textSearch, setTextSearch] = useState<string>('');

  const getBooks = (index: number) => {
    dispatch(getBooksAction(textSearch, index));
  };

  const renderBook = ({ item }: any) => <CardBook book={item} />;

  return (
    <S.Container>
      <S.ContainerHome>
        <S.Form>
          <S.ContainerInput>
            <Input value={textSearch} onChangeText={setTextSearch} />
          </S.ContainerInput>
          <S.Button onPress={() => getBooks(0)}>
            <S.IconSearch type="ionicons" />
          </S.Button>
        </S.Form>

        <S.List
          data={listBooks}
          extraData={[listBooks, textSearch]}
          renderItem={renderBook}
          keyExtractor={(item: any) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          refreshing={loading}
          onRefresh={() => getBooks(listBooks.length)}
          onEndReached={() => getBooks(listBooks.length)}
          onEndReachedThreshold={0.1}
        />
      </S.ContainerHome>
    </S.Container>
  );
};

export default Home;
