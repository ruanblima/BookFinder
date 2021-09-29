import styled from 'styled-components/native';
import Icon from '~/shared/components/Icon';
import Text from '~/shared/components/Text';
import { s, sfs, vs } from '~/shared/utils/responsibleText';

interface IconProps {
  name: string;
  iconColor?: string;
  iconShow?: boolean;
}

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  flex: 1;
  padding: 0px ${s(6)}px;
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

export const ContainerButton = styled.View`
  margin-bottom: ${vs(6)}px;
  padding: 0px ${vs(40)}px;
`;

export const ContainerButtons = styled.View`
  margin-top: ${vs(15)}px;
`;

export const Form = styled.View`
  flex: 0.9;
  width: 100%;
  padding: 10px 10px;
  justify-content: center;
`;

export const ContainerInput = styled.View`
  margin-bottom: ${vs(10)}px;
`;

export const ContainerSelect = styled.View`
  padding: 10px 6px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Select = styled.View`
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
  padding: 10px;
  flex: 0.97;
`;

export const HeaderSelect = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GenderSelected = styled(Text).attrs(({ theme }) => ({
  fontSize: theme.Sizes.FONTSIZE_INPUT,
}))`
  color: ${({ theme }) => theme.Colors.TEXT_NO_CLICKABLE};
`;

export const IconSelect = styled(Icon).attrs<IconProps>(({ theme, name }) => ({
  name,
  size: theme.Sizes.ICON_SIZE,
}))<IconProps>`
  margin-top: ${({ iconShow }) => (iconShow ? 0 : 10)}px;
  color: ${({ iconColor, theme }) =>
    iconColor || theme.Colors.ICON_COLOR_CLICKABLE};
`;

export const Button = styled.TouchableOpacity``;
