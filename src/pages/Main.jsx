import { styled } from "styled-components";

export default function Main() {
  return (
    <PageContainer className="main">
      Clone Site with Framer-motion
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${window.innerHeight}px;
  color: #f6fab9;
  background-color: #0c1844;
`;
