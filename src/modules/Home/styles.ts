import styled from 'styled-components/native';
import Icon from '~/shared/components/Icon';

import { vs } from '~/shared/utils/responsibleText';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const Form = styled.View`
  flex: 0.15;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerHome = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  flex: 0.1;
`;

export const ContainerInput = styled.View`
  margin-bottom: ${vs(10)}px;
  flex: 0.9;
`;

export const Indicator = styled.ActivityIndicator``;

export const List = styled.FlatList`
  width: 100%;
  flex: 0.95;
  padding: 5px;
`;

export const IconSearch = styled(Icon).attrs(({ theme }) => ({
  name: 'search',
  size: theme.Sizes.ICON_SIZE,
}))`
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
`;
