import styled from "styled-components";

export default function LoginPage() {
  return (
    <StyledPage>
      <StyledHeader>MyWallet</StyledHeader>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.h1`
  color: #ffffff;
  margin: 159px 0 24px 0;
  font-size: 32px;
  line-height: 50px;
  font-family: "Saira Stencil One",cursive ;
`;
