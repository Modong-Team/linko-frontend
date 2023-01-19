import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';
import { ResetCSS } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

  html {
    font-size: 62.5%;
  }

  html, body {
    font-family: Pretendard, 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui,
		Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  * {
    font-size: 1.6rem;
    font-weight: 400;
    box-sizing: border-box;
    color: ${Colors.gray900};
  }
`;
