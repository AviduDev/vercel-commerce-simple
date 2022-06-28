import styled from "styled-components";

export const CollectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.colors.second};
  color: ${({ theme }) => theme.colors.main};

  display: flex;
  justify-content: center;
  align-items: end;

  .content {
    width: 100%;
    min-height: 85vh;
    max-width: ${({ theme }) => theme.limits.pageWidth};

    display: flex;
    flex-direction: column;

    gap: ${({ theme }) => theme.sizes.lg};

    .panel {
      width: 100%;
    }

    .cards {
      min-height: 70vh;

      display: flex;
      justify-content: space-between;
      gap: ${({ theme }) => theme.sizes.mdx};

      .card {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.sizes.md};

        span {
          font-weight: 500;
        }
        
        &:nth-child(2) {
          /* max-height: 50vh; */
        }
      }
    }
  }
`;
