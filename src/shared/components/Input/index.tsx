import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { TextInputProps } from 'react-native';

import { sfs } from '~/shared/utils/responsibleText';

import * as S from './styles';

interface InputProps {
  label: string;
  iconRight?: string;
  error?: any;
  labelSameLine?: boolean;
  actionIcon?: () => void;
}

const Input: React.FC<TextInputProps & InputProps> = ({
  label,
  iconRight,
  labelSameLine,
  error,
  actionIcon,
  ...rest
}) => {
  const { Sizes } = useContext(ThemeContext);
  const fontSize = Sizes.FONTSIZE_INPUT;

  return (
    <S.InputWrapper>
      <S.Container labelSameLine={labelSameLine}>
        <S.Label fontSize={sfs(9)}>{label}</S.Label>
        <S.ContainerInput error={error} labelSameLine={labelSameLine}>
          <S.Input {...rest} customFontSize={fontSize} iconRight={iconRight} />
          {iconRight && (
            <S.Touchable onPress={() => actionIcon && actionIcon()}>
              <S.IconInput name={iconRight} />
            </S.Touchable>
          )}
        </S.ContainerInput>
      </S.Container>
      <S.ErrorMessage fontSize={sfs(7)}>{error}</S.ErrorMessage>
    </S.InputWrapper>
  );
};
export default Input;
