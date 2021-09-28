import React from 'react';
import { Image, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { s } from 'react-native-size-matters';

import * as S from './styles';

const BooksInformation: React.FC = () => {
  const route = useRoute();
  const { book }: any = route.params;

  let authorDisplay = '';
  if (book?.volumeInfo?.authors?.length) {
    authorDisplay = book.volumeInfo.authors?.join('; ');
  }

  return (
    <S.Container>
      <S.BookInfoContainer>
        {book?.volumeInfo?.imageLinks?.thumbnail && (
          <S.ContainerImage>
            <Image
              style={{
                width: s(250),
                height: s(350),
                borderRadius: s(20),
                marginBottom: 10,
              }}
              source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
            />
          </S.ContainerImage>
        )}

        <S.ContainerName>
          <S.BookName>{book.volumeInfo.title}</S.BookName>
        </S.ContainerName>

        <S.ContainerDetails>
          <S.ContainerTitleDetails>
            <S.DetailsTitleText>Autor(es)</S.DetailsTitleText>
            <S.DetailsText>{authorDisplay || 'Não informado'}</S.DetailsText>
          </S.ContainerTitleDetails>

          <S.ContainerTitleDetails>
            <S.DetailsTitleText>Data de publicação</S.DetailsTitleText>
            <S.DetailsText>
              {book.volumeInfo.publishedDate
                ? book.volumeInfo.publishedDate
                : 'Não innformada'}
            </S.DetailsText>
          </S.ContainerTitleDetails>

          <S.ContainerTitleDetails>
            <S.DetailsTitleText>Mais informações</S.DetailsTitleText>
            <S.DetailsText>
              É este livro que está procurando? {`\n`}
              <S.LinkText
                onPress={() => {
                  Linking.openURL(book.volumeInfo.infoLink);
                }}>
                Então, encontre mais informações aqui!
              </S.LinkText>
            </S.DetailsText>
          </S.ContainerTitleDetails>
          <S.DetailsTitleText>Descrição</S.DetailsTitleText>
          <S.DescriptionText>
            {book.volumeInfo.description
              ? book.volumeInfo.description
              : 'Não informada'}
          </S.DescriptionText>
        </S.ContainerDetails>
      </S.BookInfoContainer>
    </S.Container>
  );
};

export default BooksInformation;
