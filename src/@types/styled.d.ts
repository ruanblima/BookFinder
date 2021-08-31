// import original module declarations
import 'styled-components';

type ColorsProps = {
  BLACK: string;
  WHITE: string;
  YELLOW: string;
  DELL_BLUE: string;
  DISABLED_BUTTON: string;
  SECONDARY_BACKGROUND: string;
  GREEN_ALERT: string;
  GRAY: string;
  GRAY_BACKGROUND: string;
  MEDIUM_GRAY: string;
  LIGHT_GRAY: string;
  GRANITE: string;
  BLUE_ACCENT: string;
  DARK_BLUE: string;
  SELECTED_BUTTON: string;
  ERROR: string;
  ERROR_CIRCLE: string;
  ERROR_BUTTON: string;
  FEEDBACK_CORRECT: string;
  FEEDBACK_ERROR: string;
  FEEDBACK_WARNING: string;
  SUCCESS_BUTTON: string;
  SUCCESS_BORDER: string;
  BACKGROUND_WHITE: string;
  GRAY_LIGHT: string;
  SECONDARY_LIGHT_GRAY: string;
  INTERPOLATE_BLUE: string;
  MUTED: string;
  CARD_TEXT: string;
  BORDER_BLACK: string;
  SELECTED_CARD: string;
  SECONDARY_MEDIUM_GRAY: string;
  FONT_INPUT: string;
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
};

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    Sizes: SizingProps;
    Colors: ColorsProps;
  }
}
