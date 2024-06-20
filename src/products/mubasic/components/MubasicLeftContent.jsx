import { styled } from "styled-components";

export default function MubasicLeftContent() {
  return (
    <ViewContainer>
      <Logo>Mubasic</Logo>
      <Content>
        The <strong>#1</strong>
        <br />
        source for
        <br />
        children's
        <br /> music
      </Content>
      <FooterContent>
        An ever-growing catalogue of
        <br /> high-quality children’s music,
        <br /> sourced by talented music
        <br /> creators from all over the world.
      </FooterContent>
    </ViewContainer>
  );
}

const ViewContainer = styled.div`
  padding: 2.5rem;
`;
const Logo = styled.div`
  font-size: 48px;
  font-weight: bold;
`;
const Content = styled.div`
  margin-top: 10rem;
  font-size: 109px;
  font-weight: bold;
  strong {
    color: #ff7f3e;
  }
`;
const FooterContent = styled.div`
  margin-top: 5rem;
  font-size: 24px;
  line-height: 1.2;
`;
