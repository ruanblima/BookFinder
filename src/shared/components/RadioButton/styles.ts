import styled from 'styled-components/native';
import { vs, s } from 'react-native-size-matters';
import Text from '~/shared/components/Text';
import { sfs } from '~/shared/utils/responsibleText';

export const ButtonsList = styled.View`
  margin-top: ${vs(22)}px;
  align-self: flex-start;
`;

export const ButtonContainer = styled.View`
  margin-top: auto;
  flex-direction: row;
  align-items: center;
  margin-right: ${s(15)}px;
`;

export const Button = styled.TouchableOpacity`
  height: ${s(24)}px;
  width: ${s(24)}px;
  border-radius: ${s(12)}px;
  border-width: ${s(2)}px;
  border-color: ${({ theme }) => theme.Colors.BUTTON_COLOR};
  align-items: center;
  justify-content: center;
  margin-right: ${s(10)}px;
  margin-bottom: ${vs(5)}px;
`;

export const Label = styled(Text).attrs({
  fontSize: sfs(18),
})`
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
`;

export const CheckedButton = styled.View`
  width: ${s(12)}px;
  height: ${s(12)}px;
  border-radius: ${s(6)}px;
  background-color: ${({ theme }) => theme.Colors.BUTTON_COLOR};
`;
