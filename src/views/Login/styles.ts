import styled from 'styled-components/native';

interface TitleTextProps {
  colorText?: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text<TitleTextProps>`
  color: ${({colorText}) => (colorText ? colorText : '#000')};
`;
