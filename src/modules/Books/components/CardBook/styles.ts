import styled from 'styled-components/native';

import Text from '~/shared/components/Text';

import { vs } from '~/shared/utils/responsibleText';

export const Container = styled.View.attrs(({ theme }) => ({
  shadowOpacity: 7,
  shadowOffset: { height: 2, width: 2 },
  shadowColor: theme.Colors.GRAY,
  elevation: 7,
}))`
  padding: 20px 15px;
  width: 100%;
  background: ${({ theme }) => theme.Colors.CARD_COLOR};
  border-width: 1px;
  border-color: ${({ theme }) => theme.Colors.CARD_BORDER_COLOR};
  margin-bottom: ${vs(15)}px;
  border-radius: 6px;
  flex-direction: row;
`;

export const Touchable = styled.TouchableOpacity``;

export const TitleBook = styled(Text)`
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
  flex-shrink: 1;
  flex-wrap: wrap;
`;

export const ImageBook = styled.Image`
  width: 34px;
  height: 34px;
`;
