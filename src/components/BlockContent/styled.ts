import styled from "styled-components";

export const BlockContentWrapper = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.limits.pageWidth};
  margin: 0 auto;
`;
