import styled from "styled-components";

export const FeaturesWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 93vh;

  background-color: ${({ theme }) => theme.colors.second};
  color: ${({ theme }) => theme.colors.main};

  display: flex;
  justify-content: center;
  align-items: end;

  .content {
    width: 100%;
    max-width: ${({ theme }) => theme.limits.pageWidth};

    display: flex;
    justify-content: space-between;

    gap: ${({ theme }) => theme.sizes.mdx};

    .panel {
      width: 100%;
      display: grid;
      grid-auto-rows: auto 1fr;
      gap: ${({ theme }) => theme.sizes.lg};
    }

    .panel-features {
      height: fit-content;
      min-height: 50vh;

      .features-grid {
        display: grid;
        grid-template-areas:
          "a b"
          "c d";
        gap: ${({ theme }) => theme.sizes.smx};

        .feature {
          display: grid;
          grid-template-rows: auto auto 1fr;
          gap: ${({ theme }) => theme.sizes.sm};

          span {
            font-weight: 500;
            font-size: ${({ theme }) => theme.sizes.md};
          }

          p {
            max-width: 250px;
            font-weight: 200;
            font-size: ${({ theme }) => theme.sizes.smx};
          }
        }
      }
    }

    .panel-image {
      .image {
        width: 100%;
        max-width: 80%;
        min-height: 80vh;
        margin-left: auto;

        img {
          transition: .3s linear;
        }
      }
    }
  }
`;
