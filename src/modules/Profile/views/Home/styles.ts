import styled from 'styled-components/native';
import Icon from '~/shared/components/Icon';
import { s, sfs, vs } from '~/shared/utils/responsibleText';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  flex: 1;
  padding: 0px ${s(8)}px;
`;

export const ContainerImage = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: ${s(20)}px;
  padding-top: ${s(20)}px;
`;

export const Touchable = styled.TouchableOpacity`
  align-items: flex-end;
`;

export const IconPerson = styled(Icon).attrs(({ theme }) => ({
  name: 'person-circle',
  type: 'ionicons',
  color: theme.Colors.GRAY_LIGHT,
}))`
  font-size: ${sfs(110)}px;
`;

export const IconEdit = styled(Icon).attrs((props) => ({
  type: 'material',
  name: 'edit',
  color: props.theme.Colors.BACKGROUND,
}))`
  font-size: ${sfs(25)}px;
  align-items: center;
  justify-content: center;
`;

export const ContainerIcon = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.Colors.BUTTON_COLOR};
  width: ${vs(30)}px;
  height: ${vs(30)}px;
  border-radius: ${vs(20)}px;
  margin-top: ${vs(-30)}px;
`;

export const Image = styled.Image`
  width: ${s(130)}px;
  height: ${s(130)}px;
  border-radius: ${s(65)}px;
`;
