import styled, { css } from "styled-components";

const DarkHeader = css`
  width: 100%;
  position: absolute;

  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  color: ${({ theme }) => theme.colors.second};

  .content {
    width: 100%;
    min-height: 100px;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.limits.pageWidth};

    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    .logo {
      font-size: ${({ theme }) => theme.sizes.md};
      font-weight: 500;
      letter-spacing: -0.1rem;
    }

    .menu-btn {
      height: 100%;
      padding: ${({ theme }) => theme.sizes.md};

      background-color: ${({ theme }) => theme.colors.main};
      border-left: 1px solid rgba(255, 255, 255, 0.25);
      border-right: 1px solid rgba(255, 255, 255, 0.25);

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      &,
      * {
        transition: 0.5s ease-out;
      }
      :hover {
        filter: invert();

        svg {
          rect {
            :nth-child(2) {
              transform: translateX(0);
            }
          }
        }
      }

      svg {
        fill: rgba(255, 255, 255, 0.5);

        rect {
          :nth-child(2) {
            transform: translateX(30px);
          }
        }
      }
    }
  }
`;

const LightHeader = css`
  width: 100%;
  position: absolute;

  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.main};

  .content {
    width: 100%;
    min-height: 100px;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.limits.pageWidth};

    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    .logo {
      font-size: ${({ theme }) => theme.sizes.md};
      font-weight: 500;
      letter-spacing: -0.1rem;
    }

    .menu-btn {
      height: 100%;
      padding: ${({ theme }) => theme.sizes.md};

      border-left: 1px solid rgba(0, 0, 0, 0.25);
      border-right: 1px solid rgba(0, 0, 0, 0.25);

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      &,
      * {
        transition: 0.5s ease-out;
      }
      :hover {
        svg {
          rect {
            :nth-child(2) {
              transform: translateX(0);
            }
          }
        }
      }

      svg {
        fill: rgba(0, 0, 0, 0.5);

        rect {
          :nth-child(2) {
            transform: translateX(30px);
          }
        }
      }
    }
  }
`;

export const HeaderWrapper = styled.header`
  ${({ lightMode }: any) => (lightMode ? LightHeader : DarkHeader)};
`;
