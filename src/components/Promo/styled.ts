import styled from "styled-components";

export const PromoWrapper = styled.section`
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
    min-height: 100vh;
    padding-top: 7vh;
    max-width: ${({ theme }) => theme.limits.pageWidth};

    display: grid;
    grid-template-rows: auto auto 1fr;
    justify-items: center;

    gap: ${({ theme }) => theme.sizes.mdx};

    p {
      text-align: center;
      max-width: 30%;
    }

    .image {
      width: 100%;
      aspect-ratio: 13/6;

      overflow: hidden;

      img {
        transition: .0s linear;
      }

      span {
        transform: scale(1.3) !important;
      }
    }
  }
`;
