// import original module declarations
import 'styled-components';

type ColorsProps = {
  BLACK: string;
  WHITE: string;
  GRAY: string;
  MEDIUM_GRAY: string;
  LIGHT_GRAY: string;
  GRANITE: string;
  ERROR: string;
  FEEDBACK_CORRECT: string;
  FEEDBACK_WARNING: string;
  BACKGROUND_WHITE: string;
  GRAY_LIGHT: string;
  SECONDARY_LIGHT_GRAY: string;
  CARD_TEXT: string;
  BORDER_BLACK: string;
  SECONDARY_MEDIUM_GRAY: string;
  FONT_INPUT: string;
  COLOR_APLICATION: string;
};

type SizingProps = {
  FONTSIZE_BUTTON: number;
  FONTSIZE_BUTTON_SEND: number;
  FONTSIZE_BUTTON_TITLE: number;
  FONTSIZE_INPUT: number;
  FONTSIZE_TITLE: number;
  FONTSIZE_INPUT_LABEL: number;
  FONTSIZE_LABEL: number;
  ICON_SIZE_BUTTON: number;
  ICON_SIZE: number;
};

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    Sizes: SizingProps;
    Colors: ColorsProps;
  }
}
