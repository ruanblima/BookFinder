import styled from 'styled-components/native';

import { s, sfs, vs } from '~/shared/utils/responsibleText';

import Text from '~/shared/components/Text';
import Icon from '~/shared/components/Icon';

export const Container = styled.View``;

export const ContainerHeader = styled.View`
  padding: ${vs(10)}px ${s(10)}px;
  background: ${({ theme }) => theme.Colors.COLOR_HEADER};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerTitle = styled.View`
  flex: 0.6;
`;

export const Title = styled(Text).attrs({
  fontSize: sfs(23),
})`
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.TEXT_NO_CLICKABLE};
  margin-left: 18px;
`;

export const ContainerFont = styled.View`
  flex-direction: row;
`;

export const ContainerAccessibility = styled.View`
  min-height: ${vs(50)}px;
  background: ${({ theme }) => theme.Colors.COLOR_APLICATION};
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: space-between;
`;

export const RestoreFont = styled(Text).attrs({
  fontSize: sfs(25),
})`
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
  margin-right: 20px;
  margin-left: 18px;
`;

export const DecreaseIncreaseFont = styled(Text).attrs({
  fontSize: sfs(25),
})`
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
`;

export const Button = styled.TouchableOpacity``;

export const ButtonLeft = styled.TouchableOpacity`
  flex: 0.3;
  margin-left: -10px;
`;

export const IconColor = styled(Icon).attrs(({ theme }) => ({
  name: 'invert-colors',
  size: theme.Sizes.ICON_SIZE,
}))`
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
`;

export const IconBack = styled(Icon).attrs(({ theme }) => ({
  name: 'chevron-left',
  size: theme.Sizes.ICON_SIZE_BACK,
}))`
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
`;
