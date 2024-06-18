import { styled } from "styled-components";

export default function ScrollOverlayMain({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${window.innerHeight}px;
  color: #f6fab9;
`;
