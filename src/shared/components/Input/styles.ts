import { vs, s } from 'react-native-size-matters';
import styled from 'styled-components/native';

import Icon from '~/shared/components/Icon';
import Text from '~/shared/components/Text';

interface IconInputProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

interface ContainerProps {
  labelSameLine?: boolean;
}

interface ContainerInputProps {
  error: string;
  labelSameLine?: boolean;
}

interface TextInputProps {
  customFontSize: number;
  iconRight?: string;
}

export const InputWrapper = styled.View`
  flex: 1;
`;

export const Touchable = styled.TouchableOpacity``;

export const Label = styled(Text).attrs(({ theme }) => ({
  fontSize: theme.Sizes.FONTSIZE_INPUT_LABEL,
}))`
  color: ${({ theme }) => theme.Colors.FONT_INPUT};
`;

export const ContainerInput = styled.View<ContainerInputProps>`
  flex-direction: row;
  min-height: ${vs(30)}px;
  border-color: ${({ theme, error }) =>
    error ? theme.Colors.ERROR : theme.Colors.MEDIUM_GRAY};
  background-color: ${({ theme }) => theme.Colors.WHITE};
  margin-top: ${({ labelSameLine }) => (labelSameLine ? 0 : 10)}px;
  margin-left: ${({ labelSameLine }) => (labelSameLine ? 15 : 0)}px;
  width: ${({ labelSameLine }) => (labelSameLine ? '65%' : '100%')};
  border-radius: 2px;
  border-width: 1px;
  padding: ${vs(1)}px ${s(4)}px;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: ${({ labelSameLine }) => (labelSameLine ? 'row' : 'column')};
  align-items: ${({ labelSameLine }) =>
    labelSameLine ? 'center' : 'flex-start'};
  justify-content: center;
`;

export const Input = styled.TextInput.attrs<TextInputProps>(
  ({ customFontSize }) => ({
    fontSize: customFontSize,
  }),
)<TextInputProps>`
  height: ${vs(25)}px;
  width: ${({ iconRight }) => (iconRight ? 90 : 100)}%;
`;
export const ErrorMessage = styled(Text)`
  color: ${({ theme }) => theme.Colors.ERROR};
  margin-top: 15px;
`;

export const IconInput = styled(Icon).attrs<IconInputProps>(
  ({ theme, name, iconType }) => ({
    name,
    size: theme.Sizes.FONTSIZE_INPUT,
    type: iconType,
  }),
)<IconInputProps>`
  color: ${({ iconColor, theme }) => iconColor || theme.Colors.DELL_BLUE};
`;
