import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: end;

  .content {
    width: 100%;
    min-height: 80vh;
    max-width: ${({ theme }) => theme.limits.pageWidth};

    display: grid;
    grid-template-columns: 1.2fr 1.6fr;
    gap: ${({ theme }) => theme.sizes.xl};
    align-items: baseline;
  }

  .image {
    height: 100%;
    overflow: hidden;

    img {
      transition: 0s linear;
    }

    span {
      transform: scale(1.3) !important;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    gap: ${({ theme }) => theme.sizes.mdx};

    h2 {
      font-weight: 100;

      span {
        font-style: italic;
      }
    }

    p {
      max-width: 750px;
      font-size: ${({ theme }) => theme.sizes.md};
      font-weight: 100;
    }
  }
`;
