import CONFIG from "../config.json";
import { createGlobalStyle, css } from "styled-components";
import CssReset from "./css-reset";
import FontStyles from "./fonts";
import LocomotiveStyles from "styles/plugins/locomotiveScroll";

const WireframeMode = css`
  body {
    * {
      opacity: 0.95;
      border: 1px solid rgba(200, 100, 190, 1);
      background-color: rgba(100, 255, 90, 0.2);
    }
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${CssReset}
  ${FontStyles}
  ${LocomotiveStyles}
  ${CONFIG.wireframeMode && WireframeMode}

  html, body {
    font-size: ${({ theme }) => theme.sizes.defaultSize};
  }

  body {
    background: ${({ theme }: any) => theme.colors.white};
    color: ${({ theme }: any) => theme.colors.main};
  }

  p {
    font-size: ${({ theme }) => theme.sizes.smx};
  }

  ${({ theme }) =>
    Object.keys(theme.sizes)
      .reverse()
      .map((size, _idx) => {
        return css`
          h${_idx + 1} {
            font-size: ${theme.sizes[size]};
          }
        `;
      })}
`;
