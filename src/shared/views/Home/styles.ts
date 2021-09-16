import styled from 'styled-components/native';

import { vs } from '~/shared/utils/responsibleText';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
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

export const ContainerInput = styled.View`
  margin-bottom: ${vs(10)}px;
`;

export const Indicator = styled.ActivityIndicator``;
