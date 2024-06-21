import { styled } from "styled-components";
import SkewHome from "./components/SkewHome";
import SkewMain from "./components/SkewMain";

export default function SkewScroll() {
  return (
    <PageContainer>
      <SkewHome />
      <SkewMain />
    </PageContainer>
  );
}

const PageContainer = styled.div``;
