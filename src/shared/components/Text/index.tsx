import React from 'react';
import { Text } from 'react-native';

import { createStyle } from '~/shared/utils/fontStyle';

interface NewTextProps {
  fontSize?: number;
  style?: any;
  capitalize?: boolean;
  text?: string;
}

const NewText: React.FC<NewTextProps> = ({
  fontSize = 16,
  style,
  capitalize,
  text,
  children,
  ...rest
}) => {
  const customStyle = createStyle(fontSize, style);

  return (
    <Text {...rest} style={customStyle} allowFontScaling={false}>
      {(text && capitalize && text.toUpperCase()) || (text && text) || children}
    </Text>
  );
};

export default NewText;
