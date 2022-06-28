import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 65vh;
  background-color: ${({ theme }) => theme.colors.main};

  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr auto;

  color: ${({ theme }) => theme.colors.white};

  .text {
    text-align: center;
    h2 {
      font-size: ${({ theme }) => theme.sizes.lg};
    }
  }

  .social-list {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    gap: ${({ theme }) => theme.sizes.lg};
    padding-bottom: 7vh;

    li {
      font-size: ${({ theme }) => theme.sizes.md};
      font-family: "Cormorant", serif;
      opacity: 0.7;

      transition: 0.4s ease-out;
        cursor: pointer;
      :hover {
        opacity: 1;
      }

      &.logo {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        opacity: 1;
      }
    }
  }
`;
