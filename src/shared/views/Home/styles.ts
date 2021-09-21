import styled from 'styled-components/native';
import Text from '~/shared/components/Text';

import { s, vs } from '~/shared/utils/responsibleText';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

export const Form = styled.View`
  flex: 0.2;
  width: 100%;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerHome = styled.View`
  flex: 1;
`;

export const ContainerButton = styled.View`
  flex: 0.1;
`;

export const ContainerInput = styled.View`
  margin-bottom: ${vs(10)}px;
`;

export const Indicator = styled.ActivityIndicator``;

export const List = styled.FlatList`
  width: 100%;
  flex: 0.9;
`;

export const BookView = styled.View`
  padding: 20px 10px 20px 10px;
  width: 100%;
`;

export const ImageBook = styled.Image`
  width: ${s(100)}px;
  height: ${s(150)}px;
  margin-right: 10px;
`;

export const NewTitle = styled(Text)`
  color: ${({ theme }) => theme.Colors.BLACK};
  flex-shrink: 1;
  flex-wrap: wrap;
`;

export const ImageInfoContainer = styled.View`
  flex-direction: row;
`;
