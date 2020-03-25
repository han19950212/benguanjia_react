import {createGlobalStyle} from 'styled-components';
export const GlobalStyleIcon = createGlobalStyle`

  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1585123190660'); /* IE9 */
  src: url('./iconfont.eot?t=1585123190660#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1585123190660') format('woff'),
  url('./iconfont.ttf?t=1585123190660') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1585123190660#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }



`


