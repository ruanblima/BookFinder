import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const ContainerTitle = styled.View`
  flex: 0.1;
  justify-content: center;
`;

export const TextTitle = styled.Text`
  color: black;
  font-size: 40px;
`;

export const ContainerInput = styled.View`
  background-color: ${({ theme }) => theme.Colors.GRANITE};
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
`;

export const TextInput = styled.TextInput`
  padding: 10px;
  font-size: 20px;
`;

export const Form = styled.View`
  flex: 0.5;
  width: 100%;
  padding: 10px 30px;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  flex: 0.2;
`;
