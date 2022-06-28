import styled from "styled-components";

export const AboutWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.colors.second};
  color: ${({ theme }) => theme.colors.main};

  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 100%;
    min-height: 85vh;
    max-width: ${({ theme }) => theme.limits.pageWidth};

    display: flex;
    justify-content: space-between;
    align-items: center;

    .panel {
      min-height: inherit;

      display: grid;
      grid-template-rows: auto 1fr;
      width: 100%;
      max-width: 40%;
      gap: ${({ theme }) => theme.sizes.mdx};

      .paragraph {
        display: grid;
        gap: ${({ theme }) => theme.sizes.smx};

        p {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
      }

      img {
        transition: 0.3s linear;
      }
    }
  }
`;
